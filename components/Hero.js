import Image from 'next/image';
import { hero } from '@/data/config';
import { useTheme } from 'next-themes';
import styled from "styled-components";
import { keyframes } from "styled-components";
export default function Hero() {
  const { theme, setTheme } = useTheme();
  return (
    <div className="mb-20">
        <div className="flex   justify-end">
      
      <Image
        src="/static/icons/sun.svg"
        width={30}
        height={30}
        alt="Toggle theme"
        className="cursor-pointer toggleTheme"
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      />
    </div>
    <div className='flex justify-center mb-6'>
        <div className="w-40 h-40 rounded-full relative overflow-hidden  ">
          <Image
            src="/static/profile.png"
            layout="fill"
            objectFit="contain"
            alt="LeBron"
          />
        </div>
        </div>
        <AnimatedGradientText>Hi, I'm Vitaliy Statkevich</AnimatedGradientText>
      <p className="text-lg mt-3 text-center">{hero.desc}</p>
    </div>
  );
}
const hue = keyframes`
 from {
   -webkit-filter: hue-rotate(0deg);
 }
 to {
   -webkit-filter: hue-rotate(-360deg);
 }
`;
const AnimatedGradientText = styled.h1`
  color: #f35626;
  background-image: -webkit-linear-gradient(92deg, #f35626, #feab3a);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-animation: ${hue} 10s infinite linear;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial,
    sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  font-feature-settings: "kern";
  font-size: 48px;
  font-weight: 700;
  line-height: 48px;
  overflow-wrap: break-word;
  text-align: center;
  text-rendering: optimizelegibility;
  -moz-osx-font-smoothing: grayscale;
`;