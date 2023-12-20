import React from 'react';
import FAQItem from './FAQItem';

const FAQSection = () => {
  const faqs = [
    { 
      question: "What services do student health centers provide?", 
      answer: "Student health centers typically offer a wide range of services including primary care, mental health services, wellness programs, and sometimes specialty services like women's health, physical therapy, and travel medicine. They are equipped to handle routine health issues such as colds, flu, and minor injuries, as well as providing preventive care, health education, and vaccinations." 
    },
    { 
      question: "Can students see a doctor for free at the university health center?", 
      answer: "Most university health centers offer free or low-cost services to currently enrolled students. Basic consultations and some routine services are often covered by student health fees included in tuition. However, there may be charges for certain services, lab tests, medications, and specialized treatments. It's best to check with your specific health center for details on their billing policies." 
    },
    { 
      question: "How can medical students gain practical experience while studying?", 
      answer: "Medical students gain practical experience through clinical rotations, internships, and residency programs. These provide hands-on experience in various medical settings under the supervision of experienced doctors. Students can also engage in volunteer work, research projects, and join student-run clinics to enhance their practical skills." 
    },
    { 
      question: "What support is available for students experiencing stress and burnout?", 
      answer: "Most educational institutions offer mental health services, including counseling and therapy, stress management workshops, and peer support groups. There are also online resources and hotlines for immediate support. Students are encouraged to seek help early and engage in self-care practices like regular exercise, adequate sleep, and maintaining a balanced lifestyle." 
    },
    { 
      question: "What should I do if I have a high fever?", 
      answer: "If you're experiencing a high fever, it's important to stay hydrated and rest. Over-the-counter medications like acetaminophen or ibuprofen can help reduce fever and alleviate discomfort. However, if your fever is very high (over 102°F or 39°C), persists for more than three days, or is accompanied by other symptoms like severe headache, rash, difficulty breathing, or chest pain, seek medical attention immediately. In children, particularly infants, any fever should be taken seriously, and a healthcare provider should be consulted." 
    },
    { 
      question: "What are the basic steps of first aid?", 
      answer: "The basic steps of first aid, often remembered by the acronym ABC, are Airway, Breathing, and Circulation. First, ensure the person's airway is clear. Next, check if the person is breathing and if not, provide rescue breaths. Then, check for a pulse and provide chest compressions if there is no pulse. Remember, the specific actions depend on the situation and the person's condition. It's crucial to call emergency services immediately in a serious medical situation. Taking a certified first aid course is highly recommended to be fully prepared." 
    },
    { 
      question: "What are the signs of a heart attack, and how should I respond?", 
      answer: "Students can seek career advice through their university's career services, where they can get help with exploring healthcare careers, preparing for medical school, or finding internships and shadowing opportunities. Joining student organizations focused on healthcare, attending career fairs, and networking with professionals in the field are also great ways to gain insights and advice." 
    },
  ];

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h2 className="text-2xl font-bold text-center mb-6">FAQ</h2>
      {faqs.map((faq, index) => (
        <FAQItem key={index} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  );
};

export default FAQSection;
