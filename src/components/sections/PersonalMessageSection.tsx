import FadeInSection from "@/components/FadeInSection";
import { motion } from "framer-motion";

const PersonalMessageSection = () => (
  <section className="py-20 px-6">
    <FadeInSection>
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-display font-semibold text-center text-foreground mb-10">
          A Letter For You
        </h2>
        <motion.div
          initial={{ rotate: 0 }}
          whileInView={{ rotate: -1 }}
          viewport={{ once: true }}
          className="bg-peach/40 border border-border rounded-xl p-8 md:p-12 shadow-lg relative"
        >
          {/* Decorative tape effect */}
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-6 bg-gold/40 rounded-sm" />
          
          {/* UPDATE THIS with your personal message */}
          <div className="space-y-5 text-foreground leading-relaxed font-body">
            <p className="text-primary font-display text-lg italic">My dearest,</p>
          
          <p> 
            haiii my cuteness, Mundhu ga chittii chitti adugulu vesi na venaka bench loki ochi kurchuna chinnari ki na vandanalu.. paada abhivandanalu
          </p>

          <p> 
            Nu ala kurchodam valle ga ivala na life lo oka 5 years ela enduku ala gadichi poyayo naaku teleduu.. 
          </p>

          <p> 
            Intha happy ga intha mesmerising ga okarithlife untundi ani nuvvu na cuttiee ayyake teslindhi.. nenu edisithe okaru antha feel aipoyi edchestharu ani nuvvu dorikake telsindhi laali.. I am Reallyy very happy and lucky to have such a wonderful person in my life.. I really mean this bangaruuuu
          </p>

          <p> 
            You are the greenest flag of all the men! The best person I ever know laalii <br/>
            HAPPY HAPPYY HAPPYYY HAAPYYYY HAPPYYYYY ANNIVERSARYYYYY CUTENESSSSS!!
          </p>

          <p> 
            Happiestt 5th Anniversaryy naa cuttieeeee
            I Loveeeee youuuuu chaalaa chaaaalaa chaaaalaa ekkuvaaaa bangaruuuu kondaaa
          </p>

          <p> 
            I want to  <br/>

            Thankyou for being my emotional support in all my hard times and thank you for guiding me by understanding my situation.  
            </p>

            <p>
            Thankyou for letting my self be me all the time and for being such wonderful person who has changed a lot for me and with me.
            <br /><br/>

            Thankyou for forgiving all the mistakes that I have done and the person with whom i can share anything and everything with.
            <br/>

            Thankyou for all the lovely kisses, hugs, all the wonderful time and those happy, wonderful and everlasting memories that we spent together my lovee.
            <br/>

            Thankyou for filling all your phone storage and private wall with my beautiful pictures and also for clicking such amazing pictures of me cuteness

          </p>

          <p>            
            On the whole thankyouuu soo muchh laali pucchuu… Mumma Lovess youu chaaalaa chittii panduuu
          </p>git init
          
          <p> 
            60 months ela gadichipoyayo.. neeku idea undha.. nenu nee uhallo munigi thelipothuna kabattii naaku aithe teledu pucchuu babyy… inko 60 years celebrate cheskundam manam anniversaries.. appudu crazyy ga manam 720 times inka celebrate cheskochu .. ich keem brownie thinochu
          </p>

          <p> 
            Inthe happy ga, friendly ga, cute ga beautiful ga, loved ga undham manam life anthaa muaahhh muaaahhh
          </p>

          <p> 
            We cracked a job, Touchwood we are meeting whenever its possible.. nu insta chudadam valla nenu oka internship lo unna… anni boo boo gaadi valleee.. naa cuttieeee raaa nuvvuuuu
          </p>

          <p> 
            Chaalu inka annivecharyy cutee ga celebrate cheskundam chalo pada cheeeeeyaaaaaa boooyaaaaaa loveeyaaaaa
          </p>

            <p className="text-primary font-display text-lg italic pt-2">
              Forever yours ♥
            </p>
          </div>
        </motion.div>
      </div>
    </FadeInSection>
  </section>
);

export default PersonalMessageSection;
