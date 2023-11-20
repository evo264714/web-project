import slider1 from '../../../../src/assets/slide-1.webp'
import slider2 from '../../../../src/assets/slide-2.jpg'
import slider3 from '../../../../src/assets/slide-3.webp'
import slider4 from '../../../../src/assets/slide-4.jpeg'
import AwesomeSlider from 'react-awesome-slider';
import './Banner.css'
import 'react-awesome-slider/dist/styles.css';


const Banner = () => {
    return (
        <div className="pb-10">
            <AwesomeSlider className="h-[500px]">
                <div data-src={slider1}>
                    <div className="slide-content">
                        <h2>Doctors</h2>
                        <p>We have very professional team of doctors who are always available to help the ill students.</p>
                    </div>
                </div>
                <div data-src={slider2}>
                    <div className="slide-content">
                        <h2>Prescription</h2>
                        <p>After a session or an appointment with the doctor he/she will provide you a relevant prescription.</p>
                    </div>
                </div>
                <div data-src={slider3}>
                    <div className="slide-content">
                        <h2>Technology</h2>
                        <p>We have latest and very upgraded technology for our doctors to work more precisely.</p>
                    </div>
                </div>
                <div data-src={slider4}>
                    <div className="slide-content">
                        <h2>Emergency</h2>
                        <p>We have the best facility for emergency patients. Patients who needs an immediate treatment will be taken into the emergency section of the facility.</p>
                    </div>
                </div>
                
            </AwesomeSlider>
        </div>
    );
};

export default Banner;