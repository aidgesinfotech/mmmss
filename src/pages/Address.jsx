import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { EmptyCart, Steps } from "../components/CartParts";
import { Field, SelectField } from "../components/Field";
import { LocationIcon } from "../components/Icons";
import Page from "../components/Page";
import { useCart } from "../context/cart";
import { STATES } from "../data/states";
import useLocalStorage from "../hooks/useLocalStorage";
import { KEYS } from "../lib/storage";

export default function Address() {
  const { summary: s } = useCart();
  const [saved, setSaved] = useLocalStorage(KEYS.address, {});
  const formRef = useRef(null);
  const navigate = useNavigate();
  const header = { title: "ADD DELIVERY ADDRESS", back: true };

  if (!s.lines.length) {
    return (
      <Page docTitle="Address" header={header}>
        <EmptyCart />
      </Page>
    );
  }

  const save = (e) => {
    e?.preventDefault();
    const data = Object.fromEntries(new FormData(formRef.current));
    setSaved(Object.fromEntries(Object.entries(data).map(([k, v]) => [k, v.trim()])));
    navigate("/payment");
  };

  const bar = {
    content: (
      <button className="btn save-address-btn" onClick={save}>
        Save Address and Continue
      </button>
    ),
  };

  return (
    <Page docTitle="Address" header={header} bar={bar}>
      <Steps active={2} />

      <form ref={formRef} className="address-form" onSubmit={save}>
        <h3 className="address-title">
          <LocationIcon /> Address
        </h3>

        <Field name="name" label="Full Name" autoComplete="name" defaultValue={saved.name} />
        <Field name="phone" label="Mobile number" type="tel" numeric maxLength={10} autoComplete="tel" defaultValue={saved.phone} />
        <Field name="pincode" label="Pincode" numeric maxLength={6} autoComplete="postal-code" defaultValue={saved.pincode} />
        <div className="field-row">
          <Field name="city" label="City" autoComplete="address-level2" defaultValue={saved.city} />
          <SelectField name="state" label="State" options={STATES} placeholder="Select State" defaultValue={saved.state || ""} />
        </div>
        <Field name="house" label="House No., Building Name" autoComplete="address-line1" defaultValue={saved.house} />
        <Field name="area" label="Road name, Area, Colony" autoComplete="address-line2" defaultValue={saved.area} />
        <button type="submit" hidden />
      </form>

      <footer className="checkout-foot">
        <span>
          <Link to="/help">T&amp;C</Link> | <Link to="/help">Privacy</Link>
        </span>
        <span>Demo checkout · No real payment</span>
      </footer>
    </Page>
  );
}
