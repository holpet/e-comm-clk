export default function Separator({ size }) {
  return (
    <hr
      className={`bg-gradient-to-r from-mainLighterBrown via-mainLighterGray to-mainWhiteGray border-none p-${size}`}
    />
  );
}
