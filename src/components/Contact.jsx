import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    portfolio: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      alert('Thank you for your interest! We\'ll get back to you soon.');
      setFormData({ name: '', email: '', portfolio: '', message: '' });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-zest-orange-light/5 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-zest-orange/3 rounded-full blur-3xl -z-10"></div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold text-zest-text-primary mb-6">
              Get In <span className="text-gradient-orange">Touch</span>
            </h2>
            
            <p className="text-xl text-zest-text-secondary mb-8 leading-relaxed">
              Ready to join ZEST '26? Have questions about our portfolios? 
              We'd love to hear from you and help you find your perfect fit.
            </p>

            {/* Contact Details */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-zest-orange/20 to-zest-orange-light/20 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-zest-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <div className="text-zest-text-primary font-semibold">Email</div>
                  <div className="text-zest-text-secondary">contact@zest26.edu</div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-zest-orange/20 to-zest-orange-light/20 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-zest-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-zest-text-primary font-semibold">Campus</div>
                  <div className="text-zest-text-secondary">ZEST University Campus</div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-zest-orange/20 to-zest-orange-light/20 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-zest-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-zest-text-primary font-semibold">Response Time</div>
                  <div className="text-zest-text-secondary">Within 24 hours</div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-card rounded-card p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-zest-text-primary mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-zest-surface/50 border border-zest-border rounded-lg text-zest-text-primary placeholder-zest-text-muted focus:outline-none focus:ring-2 focus:ring-zest-orange focus:border-transparent transition-all duration-300"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-zest-text-primary mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-zest-surface/50 border border-zest-border rounded-lg text-zest-text-primary placeholder-zest-text-muted focus:outline-none focus:ring-2 focus:ring-zest-orange focus:border-transparent transition-all duration-300"
                  placeholder="Enter your email address"
                />
              </div>

              <div>
                <label htmlFor="portfolio" className="block text-sm font-semibold text-zest-text-primary mb-2">
                  Interested Portfolio
                </label>
                <select
                  id="portfolio"
                  name="portfolio"
                  value={formData.portfolio}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-zest-surface/50 border border-zest-border rounded-lg text-zest-text-primary focus:outline-none focus:ring-2 focus:ring-zest-orange focus:border-transparent transition-all duration-300"
                >
                  <option value="">Select a portfolio (optional)</option>
                  <option value="accounts">Accounts</option>
                  <option value="aog">AOG (Alumni Outreach Group)</option>
                  <option value="campus">Campus</option>
                  <option value="championship">Championship</option>
                  <option value="crn">Community Reach & Networking</option>
                  <option value="design">Design</option>
                  <option value="documentation">Documentation</option>
                  <option value="esm">ESM (Electronic System Management)</option>
                  <option value="events">Events</option>
                  <option value="finance-marketing">Finance and Marketing</option>
                  <option value="hospitality">Hospitality</option>
                  <option value="infrastructure">Infrastructure</option>
                  <option value="logistics">Logistics</option>
                  <option value="media">Media</option>
                  <option value="refreshments">Refreshments</option>
                  <option value="safety-dispute">Safety and Dispute</option>
                  <option value="vfx">VFX</option>
                  <option value="web-app">Web and App</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-zest-text-primary mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-zest-surface/50 border border-zest-border rounded-lg text-zest-text-primary placeholder-zest-text-muted focus:outline-none focus:ring-2 focus:ring-zest-orange focus:border-transparent transition-all duration-300 resize-vertical"
                  placeholder="Tell us about yourself and why you're interested in ZEST '26..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary text-lg py-4 font-semibold focus:outline-none focus:ring-2 focus:ring-zest-orange focus:ring-offset-2 focus:ring-offset-zest-background disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;