import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Phone, Mail, MessageCircle, Heart, Shield, Users, CheckCircle } from "lucide-react";
import Image from "next/image";

const IS_PRODUCTION = false;
const BASE = IS_PRODUCTION ? "/one-god" : "";

export default function ShalvaLandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
          {/*
          <Image 
            src="/nav-photo.jpg" 
            alt="My Photo" 
            width={500} 
            height={300} 
          />
          */}
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-bl from-card via-background to-card">
        {/* Background Image */}
        <Image
          // `${BASE}/america.png`
          src={`${BASE}/nav-photo.jpg`}
          alt="Background"
          fill   // makes it cover the section
          className="object-cover opacity-50" // cover + opacity
          priority
        />
        <div className="absolute inset-0 bg-[url('/abstract-healing-energy-pattern.png')] opacity-5"></div>
        <div className="relative container mx-auto px-4 py-16 md:py-24">
          <div className="text-center max-w-4xl mx-auto mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance leading-tight">
              <span className="text-primary">שלווה</span> = נגמלים מעישון, חוזרים לנשום !
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 text-pretty">
              שיטה טבעית וייחודית לגמילה מעישון באמצעות ריפוי באנרגיה של כפות הידיים
              <br />
              ללא תרופות, ללא תופעות לוואי
            </p>

            {/* Contact Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Button
                size="lg"
                className="bg-[#25D366] hover:bg-[#20b955] text-white px-8 py-4 text-lg"
                >
                <MessageCircle className="ml-2 h-5 w-5" />
                יצירת קשר בוואטסאפ
                  </Button>

              {/*
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg">
                <MessageCircle className="ml-2 h-5 w-5" />
                יצירת קשר בוואטסאפ
              </Button>
              
              */}

              

              {/*
              
              <Button
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 text-lg bg-transparent"
              >
                
                <Mail className="ml-2 h-5 w-5" />
                שליחת מייל
              </Button>
              
              */}


              
            </div>

            {/* Trust Badges */}
            

            {/*
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="secondary" className="px-4 py-2 text-sm">
                <Shield className="ml-2 h-4 w-4" />
                ללא תופעות לוואי
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 text-sm">
                <Heart className="ml-2 h-4 w-4" />
                מותאם אישית
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 text-sm">
                <Users className="ml-2 h-4 w-4" />
                מאות סיפורי הצלחה
              </Badge>
            </div>
            
            */}
            



          </div>
        </div>
      </section>

      {/* Method Description */}
      <section className="py-16 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-primary">איך זה עובד?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-primary/20 hover:border-primary/40 transition-colors">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="w-8 h-8 bg-primary rounded-full"></div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">אנרגיה טבעית</h3>
                  <p className="text-muted-foreground">
                    שימוש בכוח הריפוי הטבעי של כפות הידיים להעברת אנרגיה מרגיעה ומחזקת
                  </p>
                </CardContent>
              </Card>

              <Card className="border-primary/20 hover:border-primary/40 transition-colors">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="w-8 h-8 bg-secondary rounded-full"></div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">טיפול מותאם</h3>
                  <p className="text-muted-foreground">
                    כל טיפול מותאם אישית לצרכים הייחודיים שלך ולרמת העישון הנוכחית
                  </p>
                </CardContent>
              </Card>

              <Card className="border-primary/20 hover:border-primary/40 transition-colors">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">תוצאות מהירות</h3>
                  <p className="text-muted-foreground">שינוי מיידי</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">מה אומרים הלקוחות שלנו</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border-primary/20">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "לאחר 20 שנות עישון, חשבתי שזה בלתי אפשרי. אבל הטיפול של שלווה עבד כמו קסם. כבר 6 חודשים ללא סיגריה!"
                </p>
                <p className="font-semibold">- דני, גיל 45</p>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "הגישה הטבעית והמקצועיות של שלווה עזרו לי להתגבר על התלות. הרגשתי תמיכה אמיתית לאורך כל הדרך."
                </p>
                <p className="font-semibold">- מירי, גיל 38</p>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "ללא תופעות לוואי, ללא לחץ. הטיפול היה נעים ויעיל. ממליץ בחום לכל מי שרוצה להפסיק לעשן."
                </p>
                <p className="font-semibold">- אבי, גיל 52</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-card/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">שאלות נפוצות</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">כמה טיפולים נדרשים?</h3>
                <p className="text-muted-foreground">
                  תוצאה מלאה כבר במפגש אחד.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">האם יש תופעות לוואי?</h3>
                <p className="text-muted-foreground">
                  לא. הטיפול טבעי לחלוטין ואינו כולל שימוש בתרופות או חומרים כימיים. התופעה היחידה היא הרגשת רגיעה
                  ושלווה.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">כמה זמן אורך טיפול?</h3>
                <p className="text-muted-foreground">
                  טיפול בודד אורך כ-60 דקות, כולל שיחה אישית והטיפול עצמו. הזמן מותאם לצרכים האישיים של כל לקוח.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">מוכנים להתחיל את המסע לחיים ללא עישון?</h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            הצעד הראשון הוא הקשה ביותר. אנחנו כאן לעזור לכם לעשות אותו בביטחון ובתמיכה מלאה.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="px-8 py-4 text-lg">
              <Phone className="ml-2 h-5 w-5" />
              התקשרו עכשיו
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary px-8 py-4 text-lg bg-transparent"
            >
              <MessageCircle className="ml-2 h-5 w-5" />
              שלחו הודעה
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-card text-center">
        <div className="container mx-auto px-4">
          <p className="text-muted-foreground">© 2024 שלווה - גמילה מעישון באנרגיה. כל הזכויות שמורות.</p>
        </div>
      </footer>
    </div>
  )
}
