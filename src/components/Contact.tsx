import React, { useState, useEffect } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    honeypot: '', // Honeypot field
    mathAnswer: '', // Math challenge answer
  });
  const [mathChallenge, setMathChallenge] = useState({ num1: 0, num2: 0 });

  useEffect(() => {
    // Generate random numbers for math challenge
    setMathChallenge({
      num1: Math.floor(Math.random() * 10),
      num2: Math.floor(Math.random() * 10),
    });
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Check if honeypot field is filled (bot detected)
    if (formData.honeypot) {
      console.log('Bot detected');
      return;
    }

    // Verify math challenge
    if (parseInt(formData.mathAnswer) !== mathChallenge.num1 + mathChallenge.num2) {
      alert('Incorrect math answer. Please try again.');
      return;
    }

    // If we get here, the submission is likely from a human
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '', honeypot: '', mathAnswer: '' });
    
    // Generate new math challenge
    setMathChallenge({
      num1: Math.floor(Math.random() * 10),
      num2: Math.floor(Math.random() * 10),
    });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Contact Us</h2>
        <div className="max-w-2xl mx-auto">
          <div className="mb-8 text-center">
            <p className="text-xl mb-4">Interested in learning more about STAIRWAY?</p>
            <p className="text-lg">Get in touch with us to discuss how we can revolutionize patient safety in sedation procedures.</p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              ></textarea>
            </div>
            {/* Honeypot field - hidden from users but visible to bots */}
            <div className="hidden">
              <input
                type="text"
                name="honeypot"
                value={formData.honeypot}
                onChange={handleChange}
                tabIndex={-1}
                autoComplete="off"
              />
            </div>
            {/* Math challenge */}
            <div>
              <label htmlFor="mathAnswer" className="block text-sm font-medium text-gray-700 mb-1">
                Please solve this math problem: {mathChallenge.num1} + {mathChallenge.num2} = ?
              </label>
              <input
                type="number"
                id="mathAnswer"
                name="mathAnswer"
                value={formData.mathAnswer}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;