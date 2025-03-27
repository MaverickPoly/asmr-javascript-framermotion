import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const images = [
  "https://images.unsplash.com/photo-1523509080324-9183f313dc50?q=80&w=1933&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1615128216846-99c52541bf92?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1617835594990-7cd5a9b5d153?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1592253722165-6420de008120?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1609721198187-fd385fbc94d4?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1570614738755-ed5d44865d20?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1694475557824-31b94d4d7238?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

const LightBoxImageGallery = () => {
  const section = useRef(null);
  const { scrollYProgress } = useScroll({ target: section });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-80%"]);

  return (
    <main>
      {/* Upper content */}
      <div className="h-screen w-full flex flex-col items-center justify-center">
        <h2 className="text-4xl font-bold">Hello Framer Motion 💀🥳</h2>
        <p className="max-w-xl mt-10 text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
          repudiandae modi suscipit debitis maiores quisquam laudantium facilis,
          aliquam expedita ad? Blanditiis, in inventore velit at provident
          consectetur molestias quibusdam repellendus aliquam praesentium.
          Perferendis minima cum saepe laudantium, dolore m aliquid delectus.
        </p>
        <button className="px-5 py-2 rounded-lg border border-neutral-700 bg-transparent hover:bg-neutral-900 cursor-pointer mt-8">
          Start now
        </button>
      </div>

      {/* Horizontal Scroll */}
      <section className="relative h-[300vh]" ref={section}>
        <div className="sticky top-0 flex h-screen items-center overflow-hidden w-screen">
          <motion.div className="flex gap-8" style={{ x }}>
            {images.map((image, index) => (
              <motion.div className="w-[700px] h-[400px] rounded-xl overflow-hidden">
                <img
                  src={image}
                  alt={`Image ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Other Content */}
      <div className="h-screen w-full flex items-center justify-center flex-col">
        <h1 className="text-3xl font-bold mb-10">
          This is the simple Horizontal Scroll made using Framer Motion
        </h1>
        <p className="text-neutral-300 max-w-xl text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde totam
          quas voluptates aut eius ut numquam ipsam, iure obcaecati blanditiis
          architecto quia commodi fugit. Odit, accusantium corrupti rem sapiente
          est voluptate consequuntur, enim dolore nobis dolorum doloribus
          exercitationem officia cupiditate. Quam, quae ipsum tenetur eveniet,
          commodi sapiente facere veniam debitis porro itaque illum aspernatur
          error corporis autem fugiat maxime quo?
        </p>
      </div>
    </main>
  );
};

export default LightBoxImageGallery;
