
import { GrDeliver } from 'react-icons/gr';
import { BsCurrencyDollar, BsDisc } from 'react-icons/bs';
import { BiSupport } from 'react-icons/bi';
import Container from '../../Shared/Container';
import { BsArrowBarRight } from 'react-icons/bs';
import Title from '../../Shared/Title';
import Button from '../../Shared/Button';
const AboutUs = () => {
    return (
        <Container>
            <Title heading={'About Us'} subHeading={'Our, works, Supports and Facilities'} />
            {/*  */}
            <div className="mb-10 " >
                {/* Careing the pet */}
                <div className=" pb-16 rounded-xl flex flex-col lg:flex-row items-center justify-center gap-10 max-md:px-5 ">
                    <div className="flex-1 space-y-2 text-left md:pl-20 ">
                        <h3 className="max-md:text-2xl text-4xl py-5 font-Playfair font-bold">Caring for  your  pets</h3>
                        <p >
                            Fun and Engaging Ways to Keep Your Pet Active and Happy </p>
                        <p>Regular vet check-ups, vaccinations, and preventative care to maintain your pet's health.</p>
                        <p className='pb-5'> Providing balanced and suitable food according to your pet's dietary needs, ensuring they receive proper nutrients.
                        </p>
                        <div>
                        <Button btn_text={'Show Details'} />
                        </div>
                    </div>
                    <div >
                        <img src="https://i.ibb.co/WtYcL7F/careimage-removebg-preview.png" alt="" />
                    </div>
                </div>

                {/* support and  */}
                <div className='grid grid-cols-1 font-Playfair md:grid-cols-2 lg:grid-cols-3 gap-10 max-lg:px-5'>
                    <div className='p-5 bg-neutral-50 text-center rounded-lg'>
                        <img className='mx-auto' src="https://i.ibb.co/x3ryNnF/image1.png" alt="" />
                        <h5 className='text-2xl py-3 text-neutral-900 font-semibold'>Grooming</h5>
                        <p className='text-base text-neutral-500'>Regular grooming routines such as bathing, brushing, and nail trimming to maintain their hygiene and appearance</p>
                    </div>
                    <div className='p-5 bg-neutral-50 text-center rounded-lg'>
                        <img className='mx-auto' src="https://i.ibb.co/F00drcV/image3.png" alt="" />
                        <h5 className='text-2xl py-3 text-neutral-900 font-semibold'>Pet Adoptions</h5>
                        <p className='text-base text-neutral-500'>Evaluations of the pets' behavior, health, and temperament, and nail trimming to maintain their hygiene and appearance</p>
                    </div>
                    <div className='p-5 bg-neutral-50 text-center rounded-lg'>
                        <img className='mx-auto' src="https://i.ibb.co/HpG1QPN/imgae6.png" alt="" />
                        <h5 className='text-2xl py-3 text-neutral-900 font-semibold'>Pet Store</h5>
                        <p className='text-base text-neutral-500'> Engaging your pets in physical activities and mental challenges to keep them active and mentally stimulated</p>
                    </div>
                    <div className='p-5 bg-neutral-50 text-center rounded-lg'>
                        <img className='mx-auto' src="https://i.ibb.co/syKqYGv/image4.png" alt="" />
                        <h5 className='text-2xl py-3 text-neutral-900 font-semibold'>Pet Care
                        </h5>
                        <p className='text-base text-neutral-500'>Offering affection, attention, and companionship to build a strong bond and cater to their emotional needs</p>
                    </div>
                    <div className='p-5 bg-neutral-50 text-center rounded-lg'>
                        <img className='mx-auto' src="https://i.ibb.co/7Q77YG7/image2.png" alt="" />
                        <h5 className='text-2xl py-3 text-neutral-900 font-semibold'>Pet Training</h5>
                        <p className='text-base text-neutral-500'>Teaching basic obedience commands and socializing them with other animals and people to ensure good behavior</p>
                    </div>
                    <div className='p-5 bg-neutral-50 text-center rounded-lg'>
                        <img className='mx-auto' src="https://i.ibb.co/sVZyWk6/image5.png" alt="" />
                        <h5 className='text-2xl py-3 text-neutral-900 font-semibold'>Stylish Extension</h5>
                        <p className='text-base text-neutral-500'>Engaging your pets in physical activities and mental challenges to keep them active and mentally stimulated</p>
                    </div>
                </div>


            </div>

            {/*  */}


            <div className=" bg-gray-200 mt-10 py-16 rounded-xl flex flex-col lg:flex-row items-center justify-center gap-16 max-md:px-5 ">
                <div className=" space-y-5 text-left max-w-sm max-lg:text-center text-black">
                    <p className="max-md:text-2xl text-4xl font-bold font-Playfair">ADOPTING MEANS YOU SAVE A LIFE!</p>
                    <h3 className="max-md:text-base text-2xl font-Roboto">When a family buys a dog from a pet store, it’s almost certainly a puppy mill dog. When you adopt, you’re saying no to an awful practice and keeping money out of their pockets.</h3>
                    <p className='flex max-lg:justify-center items-center gap-2 text-blue-600 font-bold'>Adoption change a life <BsArrowBarRight></BsArrowBarRight> </p>

                </div>
                <div className="relative">
                    <img src="https://i.ibb.co/0cnRfTJ/7741802-removebg-preview.png" alt="" />

                </div>
            </div>
        </Container>
    );
};

export default AboutUs;