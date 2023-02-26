import type { Icon } from 'lucide-react';

interface MenuButtonProps {
  icon: Icon;
  isActive?: boolean;
}

export function MenuButton({ icon: Icon, isActive = false }: MenuButtonProps) {
  return (
    <div
      data-active={isActive}
      className='h-12 w-full flex justify-center items-center border-l-2 border-transparent data-[active=true]:border-[#bf25e1]  data-[active=true]:bg-[#332f4d] hover:bg-[#454066]'
    >
      <Icon
        strokeWidth={1.5}
        size={28}
        color={isActive ? '#E0DEF2' : '#8F8CA8'}
      />
    </div>
  );
}
