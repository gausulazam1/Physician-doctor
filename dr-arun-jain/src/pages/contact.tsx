import React, { useState } from "react";
import { Layout } from "@/components/Layout";
import { PageBanner } from "@/components/PageBanner";
import { motion } from "framer-motion";
import { SiWhatsapp } from "react-icons/si";

const reasons = [
  "General Medicine",
  "Diabetes Management",
  "Hypertension & Blood Pressure",
  "Vaccination & Preventive Care",
  "Physiotherapy & Acupuncture",
  "Family Health Care",
  "Sexual Counseling & Education",
  "Other",
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", mobile: "", reason: "", date: "", time: "", message: "" });

  const handleWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Hello Dr. Arun Jain,\n\nAppointment Request:\nName: ${form.name}\nMobile: ${form.mobile}\nReason: ${form.reason}\nDate: ${form.date || "Flexible"}\nTime: ${form.time || "Flexible"}\nMessage: ${form.message || "None"}`
    );
    window.open(`https://wa.me/918092150012?text=${text}`, "_blank");
  };

  return (
    <Layout>
      <PageBanner
        title="Contact &"
        highlight="Location"
        subtitle="We are here Mon–Sat. Call, email, or walk in."
        breadcrumb="Contact"
      />

      <section className="py-14 sm:py-20 bg-background w-full">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">

            {/* ── LEFT: clinic details ── */}
            <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              className="flex flex-col gap-5">

              <div className="bg-white rounded-2xl border border-border shadow-sm p-5 sm:p-6 flex flex-col gap-4">
                <h3 className="font-serif font-bold text-secondary text-xl mb-1">Clinic Details</h3>

                {[
                  { icon: "📍", label: "Address", content: "Plot No. 235, Pocket D-14, Sector-7,\nOpp. Metro Pillar No.-412,\nRohini, Delhi – 110085", link: "https://maps.google.com/?q=D-14/235+Sector+7+Rohini+Delhi+110085", linkText: "Open in Google Maps ↗" },
                  { icon: "📱", label: "Mobile", content: "+91 95313 23295", link: "tel:+919531323295" },
                  { icon: "☎️", label: "Clinic Landline", content: "011-43085455", link: "tel:01143085455" },
                  { icon: "✉️", label: "Email", content: "arunjaindr@gmail.com", link: "mailto:arunjaindr@gmail.com" },
                ].map(({ icon, label, content, link, linkText }) => (
                  <div key={label} className="flex gap-3 items-start">
                    <span className="text-2xl shrink-0">{icon}</span>
                    <div className="min-w-0">
                      <h4 className="font-bold text-secondary text-sm">{label}</h4>
                      <a href={link} target={link.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors text-sm sm:text-base whitespace-pre-line break-all">
                        {content}
                      </a>
                      {linkText && (
                        <a href={link} target="_blank" rel="noopener noreferrer" className="block text-primary text-xs font-semibold hover:underline mt-0.5">
                          {linkText}
                        </a>
                      )}
                    </div>
                  </div>
                ))}

                <div className="pt-2 border-t border-border">
                  <h4 className="font-bold text-secondary text-sm mb-2">🕐 Clinic Timings</h4>
                  <div className="flex flex-col gap-1 text-sm text-muted-foreground">
                    <span>🌅 <strong>Morning OPD:</strong> 9:30 AM – 1:30 PM (Mon–Sat)</span>
                    <span>🌆 <strong>Evening OPD:</strong> 5:00 PM – 8:30 PM (Mon–Sat)</span>
                    <span>⛔ <strong>Sunday:</strong> Clinic Closed</span>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="w-full h-[240px] sm:h-[280px] rounded-2xl overflow-hidden border border-border shadow-lg">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.1!2d77.082!3d28.721!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d06e2324f9b2d%3A0xc6c761b6c8b9d40b!2sSector%2022%2C%20Rohini%2C%20Delhi!5e0!3m2!1sen!2sin!4v1714567890123"
                  width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade" title="Dr. Arun Jain Clinic Map" />
              </div>
            </motion.div>

            {/* ── RIGHT: appointment form ── */}
            <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="bg-white rounded-2xl border border-border shadow-sm p-5 sm:p-7">
                <h3 className="font-serif font-bold text-secondary text-xl mb-1">📅 Book an Appointment</h3>
                <p className="text-muted-foreground text-sm mb-5">Fill in your details — your request will be sent directly to Dr. Jain on WhatsApp.</p>

                <form onSubmit={handleWhatsApp} className="flex flex-col gap-4">
                  <div className="flex flex-col gap-1">
                    <label className="font-semibold text-secondary text-sm">Full Name *</label>
                    <input required type="text" placeholder="Your full name"
                      value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}
                      className="border border-border rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 bg-background" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="font-semibold text-secondary text-sm">Mobile Number * <span className="font-normal text-muted-foreground">(10 digits without +91)</span></label>
                    <input required type="tel" pattern="[0-9]{10}" placeholder="9876543210"
                      value={form.mobile} onChange={e => setForm({ ...form, mobile: e.target.value })}
                      className="border border-border rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 bg-background" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="font-semibold text-secondary text-sm">Reason for Visit *</label>
                    <select required value={form.reason} onChange={e => setForm({ ...form, reason: e.target.value })}
                      className="border border-border rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 bg-background">
                      <option value="">— Select Reason —</option>
                      {reasons.map(r => <option key={r} value={r}>{r}</option>)}
                    </select>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="flex flex-col gap-1">
                      <label className="font-semibold text-secondary text-sm">Preferred Date</label>
                      <input type="date" value={form.date} onChange={e => setForm({ ...form, date: e.target.value })}
                        className="border border-border rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 bg-background" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <label className="font-semibold text-secondary text-sm">Preferred Time</label>
                      <select value={form.time} onChange={e => setForm({ ...form, time: e.target.value })}
                        className="border border-border rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 bg-background">
                        <option value="">— Select —</option>
                        <option value="Morning: 9:30 AM – 1:30 PM">Morning: 9:30 AM – 1:30 PM</option>
                        <option value="Evening: 5:00 PM – 8:30 PM">Evening: 5:00 PM – 8:30 PM</option>
                      </select>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="font-semibold text-secondary text-sm">Message (Optional)</label>
                    <textarea rows={3} placeholder="Any additional details..."
                      value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
                      className="border border-border rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 bg-background resize-none" />
                  </div>
                  <button type="submit"
                    className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1fbe5c] text-white font-bold rounded-full py-3.5 text-sm sm:text-base transition-colors shadow-lg shadow-green-500/25">
                    <SiWhatsapp className="w-5 h-5" /> Send Appointment Request on WhatsApp
                  </button>
                  <p className="text-center text-muted-foreground text-xs">Your details will open WhatsApp — just press Send!</p>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
