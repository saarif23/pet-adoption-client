
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./Payment/CheckoutForm";
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY)

const PaymentModal = () => {


    return <>
        <button onClick={() => document.getElementById('modal_1').showModal()}>Donate Now</button>

        {open &&
            <dialog id="modal_1" className="modal">
                <Elements stripe={stripePromise}>
                    <CheckoutForm />
                </Elements>
            </dialog>

        }
    </>
};

export default PaymentModal;