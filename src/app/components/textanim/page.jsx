import { TypeAnimation } from 'react-type-animation';

const HeroTextAnim = (props) => {
  return (
    <TypeAnimation
      sequence={[
        'I build',
        500,
        'I build responsive,',
        500,
        'I build responsive, SEO-friendly', //  Continuing previous Text
        500,
        'I build responsive, SEO-friendly and interactive web apps',
        500,
        'I build responsive, SEO-friendly and interactive web apps with modern tools.',
        500
      ]}
      style={{ fontSize: '1em' }}
      repeat={Infinity}
      speed={75}
    />
  );
};

export default HeroTextAnim;