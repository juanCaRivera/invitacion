import React from 'react';
import { motion } from 'framer-motion';
import regalos from '../assets/regalos3.jpg';
import { LedImageWrap } from './Timeline';


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

          <LedImageWrap className="mb-6 inline-block">
            <img
              src={regalos}
              alt=""
              className="mx-auto block h-[110px] w-auto object-contain select-none"
            />
          </LedImageWrap>
<h3 className="text-4xl mb-8 text-[#b8934d]">Regalos</h3>

<p className="text-xl font-light text-[#54582f] leading-relaxed">
  Su compañía en este día tan especial es el mejor regalo que podemos recibir.  
  Sin embargo, si desean expresarnos un detalle adicional, hemos preparado algunas opciones:  
</p>

<ul className="list-disc pl-6 text-xl font-light text-[#54582f] leading-relaxed">
  <li>Muestra de cariño</li>
  <li>Lluvia de sobres</li>
</ul>

<p className="text-xl font-light text-[#54582f] leading-relaxed mt-4">
  Lo más importante para nosotros es compartir este momento con ustedes y celebrar juntos el inicio de nuestra nueva etapa.
</p>

        </motion.div>
      </div>
    </section>
  );
}
