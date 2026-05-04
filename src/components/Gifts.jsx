import React from 'react';
import { motion } from 'framer-motion';
import { Gift } from 'lucide-react';
import regalos from '../assets/regalos3.jpg';


export default function Gifts() {
  return (
    <section className="section-layout">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1 }}
          className="text-center"
        >

          <img
  src={regalos}
  alt=""
  className="mb-6 mx-auto block h-[110px] w-auto object-contain select-none"
/>
          <h3 className="text-4xl mb-8 text-[#b8934d]">Regalos</h3>
          
          <p className="text-xl font-light text-[#54582f] leading-relaxed">
            Su presencia es nuestro mejor regalo. Si desea colaborar, tendremos un cofre para sobres en el lugar del evento.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
