
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Users, Baby, Headphones, BookOpen, Heart } from 'lucide-react';
import ServiceModal from './ServiceModal'; // Assuming ServiceModal.jsx exists in the same directory

const services = [
  {
    icon: MessageCircle,
    title: "אבחון והערכה",
    description: "בדיקה מקיפה של יכולות התקשורת והדיבור עם כלים מתקדמים ומדויקים",
    longDescription: "תהליך האבחון הוא השלב הראשון והחשוב ביותר במסע שלנו. באמצעות כלים מתקדמים ומבחנים סטנדרטיים, אני מבצעת הערכה מקיפה של יכולות התקשורת, השפה והדיבור. האבחון מספק תמונה ברורה של נקודות החוזק והאתגרים, ומהווה בסיס לבניית תוכנית טיפול אישית ומדויקת שתתאים בדיוק לצרכים שלכם או של ילדכם.",
    color: "from-blue-500 to-blue-600"
  },
  {
    icon: Baby,
    title: "טיפול בילדים",
    description: "פיתוח כישורי דיבור ושפה בילדים בגישה משחקית וחמה",
    longDescription: "הטיפול בילדים מתבצע באווירה חמה, משחקית ומלאת הנאה. אני מאמינה שלמידה משמעותית מתרחשת דרך חוויה, ולכן כל מפגש מורכב ממשחקים, סיפורים ופעילויות יצירתיות המותאמות לגיל הילד ולתחומי העניין שלו. יחד, נפתח את אוצר המילים, נשפר את ההגייה ונעניק לילד כלים לתקשורת בטוחה וזורמת עם הסביבה.",
    color: "from-mint to-green-500"
  },
  {
    icon: Users,
    title: "טיפול במבוגרים",
    description: "שיקום ופיתוח יכולות תקשורת למבוגרים לאחר פגיעות או קשיים",
    longDescription: "טיפול תקשורת למבוגרים נועד לתת מענה למגוון רחב של אתגרים, בין אם מדובר בשיקום לאחר אירוע נוירולוגי, טיפול בגמגום, שיפור הגייה או חיזוק הביטחון בדיבור מול קהל. התהליך הוא אישי ודיסקרטי, ומטרתו לספק כלים מעשיים לשיפור איכות החיים והתפקוד היומיומי בתחום התקשורתי.",
    color: "from-purple-500 to-purple-600"
  },
  {
    icon: Headphones,
    title: "הפרעות קשב וריכוז",
    description: "טיפול מותאם לילדים ומבוגרים עם הפרעות קשב וריכוז",
    longDescription: "לילדים ומבוגרים עם הפרעות קשב וריכוז, עולם התקשורת יכול להיות מאתגר במיוחד. הטיפול מתמקד באסטרטגיות לארגון החשיבה, שיפור יכולות ההקשבה, ניהול שיחה והבנת סיטואציות חברתיות. אנחנו עובדים על כלים פרקטיים שעוזרים להתמודד עם האתגרים היומיומיים ולהפוך את התקשורת לחוויה חיובית ומוצלחת.",
    color: "from-orange-500 to-red-500"
  },
  {
    icon: BookOpen,
    title: "קשיי קריאה וכתיבה",
    description: "עזרה מקצועית בפיתוח כישורי קריאה וכתיבה",
    longDescription: "קריאה וכתיבה הם יסודות מרכזיים להצלחה בלימודים ובחיים. הטיפול מתמקד בפיתוח מודעות פונולוגית, פענוח, הבנת הנקרא ושטף קריאה. באמצעות שיטות עבודה מוכחות וכלים מותאמים אישית, נחזק את הביטחון ונסלול את הדרך להנאה מקריאה ולהצלחה אקדמית.",
    color: "from-teal-500 to-cyan-500"
  },
  {
    icon: Heart,
    title: "הדרכת הורים",
    description: "ליווי והדרכה להורים כיצד לתמוך בפיתוח התקשורת בבית",
    longDescription: "אתם, ההורים, השותפים החשובים ביותר בתהליך הטיפולי. במפגשי ההדרכה, אני מעניקה לכם ידע, כלים ואסטרטגיות פרקטיות כדי שתוכלו לתמוך ולקדם את התפתחות התקשורת של ילדכם גם בבית. נלמד יחד איך להפוך כל אינטראקציה יומיומית להזדמנות למידה וחיזוק.",
    color: "from-pink-500 to-rose-500"
  }
];

export default function ServicesSection() {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <section id="services" className="py-20 bg-cream-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="w-16 h-16 bg-gradient-to-br from-primary to-mint rounded-2xl mx-auto mb-6 flex items-center justify-center">
            <MessageCircle className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">השירותים שלי</h2>
          <p className="text-lg text-secondary max-w-2xl mx-auto leading-relaxed mb-6">
            מגוון רחב של שירותי טיפול בתקשורת המותאמים לכל גיל וצורך
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-mint mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05, 
                y: -10,
                transition: { duration: 0.3 }
              }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group"
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-xl font-semibold text-primary mb-4 group-hover:text-mint transition-colors duration-300">
                {service.title}
              </h3>

              <p className="text-secondary leading-relaxed">
                {service.description}
              </p>

              <div className="mt-6 pt-4 border-t border-gray-100">
                <motion.button
                  onClick={() => setSelectedService(service)}
                  whileHover={{ x: 5 }}
                  className="text-primary font-medium text-sm flex items-center gap-2 group-hover:text-mint transition-colors duration-300"
                >
                  קרא עוד
                  <div className="w-1 h-1 bg-current rounded-full"></div>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold text-primary mb-4">
              לא בטוחים איזה שירות מתאים לכם?
            </h3>
            <p className="text-secondary mb-6 leading-relaxed">
              בואו נקבע שיחת היכרות חינמית ונמצא יחד את הדרך הטובה ביותר לעזור לכם
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-primary to-mint text-white px-8 py-3 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              בואי נדבר
            </motion.button>
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedService && (
          <ServiceModal 
            service={selectedService} 
            onClose={() => setSelectedService(null)} 
          />
        )}
      </AnimatePresence>
    </section>
  );
}
