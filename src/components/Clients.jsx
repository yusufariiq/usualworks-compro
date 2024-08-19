import monokromLogo from '/assets/MONOKROM1.png';
import twinsLogo from '/assets/TWINS2.png';
import ksikLogo from '/assets/KSIK1.png';
import dapursinggahkuLogo from '/assets/DAPURSINGGAHKU.png';

const Clients = () => {
    const clients = [
        { image: twinsLogo },
        { image: dapursinggahkuLogo },
        { image: monokromLogo },
        { image: ksikLogo },
    ];

    return ( 
        <div className="h-540 p-12">
            <div className="flex items-center justify-center">
                <h1 className="text-head3 md:text-head1 font-bold text-secondary pb-1 border-b-2 mb-10 w-fit">Our Clients</h1>
            </div>
            <ul className='grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-5 items-center justify-center px-2 md:px-20 '>
                {clients.map((client, index) => (
                    <li key={index} className='py-2 px-4'>
                        <img src={client.image} alt="" className='object-contain hover:object-cover grayscale hover:grayscale-0 duration-500 ease-in-out mx-auto' />
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Clients;
