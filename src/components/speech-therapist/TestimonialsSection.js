import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, Heart, Users } from 'lucide-react';

const testimonials = [
  {
    name: "אמא של נועה, גיל 6",
    rating: 5,
    text: "הטיפול אצל [שם המטפלת] שינה לנו את החיים. נועה הייתה מאוד ביישנית ולא דיברה הרבה, ועכשיו היא לא מפסיקה לספר לנו על היום שלה. המטפלת יודעת איך לעבוד עם ילדים בצורה מיוחדת.",
    image: "👩‍👧",
    color: "from-pink-400 to-rose-500"
  },
  {
    name: "אבא של איתן, גיל 10",
    rating: 5,
    text: "איתן התמודד עם קשיים בהגייה ובביטחון העצמי. תוך מספר חודשים של טיפול, ראינו שיפור מדהים. עכשיו הוא מדבר בביטחון ואפילו מתנדב לקרוא בכיתה. אסירי תודה!",
    image: "👨‍👦",
    color: "from-blue-400 to-indigo-500"
  },
  {
    name: "סבתא של מיכל, גיל 4",
    rating: 5,
    text: "מיכל בת 4 לא דיברה כמעט בכלל. היינו מאוד מודאגים. הטיפול כאן עבד פלאים - היום היא ילדה דברנית ושמחה. המטפלת הפכה להיות חלק מהמשפחה שלנו.",
    image: "👵👧",
    color: "from-purple-400 to-violet-500"
  },
  {
    name: "אמא של רון, גיל 15",
    rating: 5,
    text: "בתור נער עם קשיי תקשורת חברתית, רון היה מתבודד הרבה. הטיפול עזר לו לבנות ביטחון עצמי ולפתח חברויות. השינוי מדהים ואנחנו גאים בו מאוד.",
    image: "👩‍👦",
    color: "from-teal-400 to-cyan-500"
  },
  {
    name: "זוג הורים לתאומים, גיל 7",
    rating: 5,
    text: "התאומים שלנו הגיעו עם קשיים שונים - אחד בהגייה ואחד בהבנה. המטפלת ידעה לטפל בכל אחד בנפרד ובאותו זמן לחזק את הקשר ביניהם. פשוט מדהים!",
    image: "👫👨‍👩‍👦‍👦",
    color: "from-orange-400 to-red-500"
  },
  {
    name: "אמא של שירה, גיל 8",
    rating: 5,
    text: "שירה עברה טראומה ולא רצתה לדבר. הגישה הרגישה והמקצועית של המטפלת עזרה לה לחזור לדבר ולהיות הילדה השמחה שהיא הייתה. זה היה תהליך מרגש ומשמח.",
    image: "👩‍👧",
    color: "from-green-400 to-emerald-500"
  }
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="w-16 h-16 bg-gradient-to-br from-primary to-mint rounded-2xl mx-auto mb-6 flex items-center justify-center">
            <Heart className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">מה אומרות המשפחות</h2>
          <p className="text-lg text-secondary max-w-2xl mx-auto leading-relaxed mb-6">
            סיפורי הצלחה ושינוי מהמשפחות שעברו את המסע איתי
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-mint mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-cream-50 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group relative overflow-hidden"
            >
              {/* Background Pattern */}
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${testimonial.color}`}></div>
              
              {/* Quote Icon */}
              <div className="flex justify-between items-start mb-4">
                <div className={`w-12 h-12 bg-gradient-to-br ${testimonial.color} rounded-xl flex items-center justify-center`}>
                  <Quote className="w-6 h-6 text-white" />
                </div>
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>

              {/* Testimonial Text */}
              <p className="text-secondary text-sm leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="text-2xl">{testimonial.image}</div>
                <div>
                  <div className="font-semibold text-primary text-sm">{testimonial.name}</div>
                  <div className="text-xs text-muted">מטופלת במרפאה</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-primary to-mint rounded-3xl p-8 text-white">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center justify-center gap-3 mb-6">
                <Users className="w-8 h-8" />
                <h3 className="text-2xl font-bold">בואו להצטרף למשפחה שלנו</h3>
              </div>
              
              <p className="text-lg mb-8 text-white/90 leading-relaxed">
                כל סיפור הצלחה מתחיל בצעד ראשון. בואו נעבוד יחד על פיתוח כישורי התקשורת של הילד שלכם
              </p>

              <div className="grid sm:grid-cols-3 gap-6 mb-8">
                {[
                  { number: "200+", text: "משפחות מרוצות" },
                  { number: "5⭐", text: "דירוג ממוצע" },
                  { number: "95%", text: "שיפור בטיפול" }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center"
                  >
                    <div className="text-2xl font-bold mb-2">{stat.number}</div>
                    <div className="text-white/90 text-sm">{stat.text}</div>
                  </motion.div>
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                className="bg-white text-primary px-8 py-3 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                בואו נתחיל גם אתכם
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}