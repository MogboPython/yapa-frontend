import { motion } from "framer-motion";

import Image from "next/image";

import avatar1 from "../../assets/Ellipse 1.svg";
import avatar2 from "../../assets/Ellipse 2.svg";
import avatar3 from "../../assets/Ellipse 3.svg";
import avatar4 from "../../assets/Ellipse 4.svg";
import avatar5 from "../../assets/Ellipse 5.svg";
import avatar6 from "../../assets/Ellipse 6.svg";
import avatar7 from "../../assets/Ellipse 7.svg";
import avatar8 from "../../assets/Ellipse 8.svg";
import avatar9 from "../../assets/Ellipse 9.svg";

const AvatarGrid = () => {
    const avatars = [
    avatar1, avatar2, avatar3, avatar4, avatar5, avatar6, avatar7, avatar8, avatar9
  ];

  const avatarPositions = [
    { top: "10px", left: "160px" },
    { top: "30px", left: "300px" },
    { top: "40px", left: "20px" },
    { top: "160px", left: "0px" },
    { top: "120px", left: "180px" },
    { top: "140px", left: "320px" },
    { top: "230px", left: "150px" },
    { top: "280px", left: "30px" },
    { top: "270px", left: "300px" },
  ];

  return (
    <div className="relative w-[87%] h-[450px]">
      {avatars.map((avatar, index) => (
        <motion.div
          key={index}
          className="absolute w-25 h-25 rounded-full overflow-hidden "
          style={{ ...avatarPositions[index] }}
          initial={{ opacity: 0, scale: 0.3 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.15, duration: 0.5, ease: "easeOut" }}
        >
          <Image src={avatar} alt={`Avatar ${index + 1}`} className="w-full h-full object-cover" />
        </motion.div>
      ))}
    </div>
  );
}

export default AvatarGrid
