import { IconSvgProps } from './type';

const EmptyIcon = ({ fill = 'currentColor', size, height, width, ...props }: IconSvgProps) => {
  return (
    <svg
      data-name="Iconly/Curved/Profile"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size || width || 24}
      height={size || height || 24}
      {...props}
    >
    </svg>
  );
};

export default EmptyIcon
