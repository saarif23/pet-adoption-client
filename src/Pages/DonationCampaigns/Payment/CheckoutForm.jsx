import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import toast from "react-hot-toast";
import { useLoaderData, useNavigate } from "react-router-dom";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";

const CheckoutForm = () => {
    const [error, setError] = useState();
    const [amount, setAmount] = useState("");
    const [clientSecret, setClientSecret] = useState("")
    const axiosPublic = useAxiosPublic();
    const { user } = useContext(AuthContext);
    const campaignsData = useLoaderData();
    const { _id, pet_name, pet_image } = campaignsData;
    const navigate = useNavigate();
    const elements = useElements();
    const stripe = useStripe();


    useEffect(() => {
        if (amount) {
            axiosPublic.post("/create-payment-intent", { donate: amount })
                .then(res => {
                    setClientSecret(res.data.clientSecret);
                })
                .catch(error => {
                    console.error("Error fetching client secret:", error);
                });
        }
    }, [axiosPublic, amount]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const amount = e.target.amount.value;
        setAmount(amount);
        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement);
        if (card === null) {
            return;
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })
        if (error) {
            console.log("payment error", error);
            setError(error.message);
        } else {
            console.log("payment method", paymentMethod);
            setError("");
        }

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || "anonymous",
                    name: user?.name || "anonymous"
                }
            }
        })
        if (confirmError) {
            console.log("confirmError", confirmError);
        } else {
            console.log("payment  intent", paymentIntent);
            if (paymentIntent.status === "succeeded") {

                const payment = {
                    email: user?.email,
                    petId: _id,
                    pet_name,
                    pet_image,
                    donate: amount,
                    transactionId: paymentIntent?.id,
                }
                const res = await axiosPublic.post("/payments", payment)
                console.log("payment saved", res);
                if (res?.status === 201) {
                    toast.success("Payment Successfull")
                    navigate('/donationCampaigns')
                }

            }
        }
    }
    return (

        <form onSubmit={handleSubmit} className="text-center bg-white p-5 rounded-md">

            <div className="flex flex-col items-center gap-10 ">
                <div className="flex-1 w-full">
                    <input
                        type="text"
                        name="amount"
                        placeholder='Enter amount'
                        required
                        className="w-full input text-black bg-black bg-opacity-0 border-2 border-gray-200 p-3 bg-none" />
                </div>
                <div className="flex-1 w-full border-2 p-3">
                    <CardElement
                        options={{

                            style: {
                                base: {
                                    fontSize: '16px',
                                    color: '#00000',
                                    '::placeholder': {
                                        color: ' #00000',
                                    },
                                },
                                invalid: {
                                    color: '#9e2146',
                                },
                            },
                        }}
                    />
                </div>
            </div>
            <button type="submit" className="bg-[#D1A054] text-white px-36 py-2 my-5" disabled={!stripe}>
                Pay
            </button>
            <p className="text-red-600">{error}</p>
        </form>


    );
};

export default CheckoutForm;