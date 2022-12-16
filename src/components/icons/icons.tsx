import { FC, FunctionComponent, MouseEventHandler, SVGProps } from 'react';
import { ReactComponent as logo } from '@assets/img/logo.svg';
import { ReactComponent as girl } from '@assets/img/girl.svg';
import { ReactComponent as grid } from '@assets/img/Grid.svg';
import { ReactComponent as coins } from '@assets/img/coins.svg';
import { ReactComponent as user } from '@assets/img/user.svg';
import { ReactComponent as logout } from '@assets/img/logout.svg';
import { ReactComponent as NFT } from '@assets/img/nft.svg';
import { ReactComponent as bank } from '@assets/img/bank.svg';
import { ReactComponent as chatFaq } from '@assets/img/chat-faq.svg';
import { ReactComponent as comingSoon } from '@assets/img/coming-soon.svg';
import { ReactComponent as plus } from '@assets/img/plus.svg';
import { ReactComponent as minus } from '@assets/img/minus.svg';

const ICONS: Record<string, FunctionComponent<SVGProps<SVGSVGElement>>> = {
  logo,
  girl,
  grid,
  coins,
  user,
  logout,
  NFT,
  bank,
  chatFaq,
  comingSoon,
  plus,
  minus,
};

interface IIconProps {
  type: string;
  onClick?: MouseEventHandler<SVGSVGElement>;
  className?: string;
}

export const Icon: FC<IIconProps> = (props) => {
  const NewIcon = ICONS[props.type];

  if (!NewIcon) {
    return null;
  }

  return <NewIcon {...props} />;
};
