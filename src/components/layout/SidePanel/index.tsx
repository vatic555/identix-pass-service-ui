import React, {useState, FC, useEffect} from 'react';
import Image from 'next/image';
import VCWalletIcon from '../../../../public/assets/vc-wallet-icon.svg';
import MarketplaceIcon from '../../../../public/assets/marketplace-icon.svg';
import ServicesIcon from '../../../../public/assets/services-icon.svg';
import IssueAVCIcon from '../../../../public/assets/issue-a-vc-icon.svg';
import VerifierIcon from '../../../../public/assets/verifier-icon.svg';
import EventLogsIcon from '../../../../public/assets/event-logs-icon.svg';
import LogoutIcon from '../../../../public/assets/logout-icon.svg';
import styled from 'styled-components';
import Link from 'next/link';
import {useRouter} from 'next/router';
import {Body2} from '../../../utils/typography';
import {SidePanelProps} from './SidePanel.props';
import {useWhoamiQuery} from '../../../generated/graphql';
import {Logout, startAndEnd} from '../../../utils/misc';
import ReactTooltip from 'react-tooltip';

function returnNothing() {
    return;
}

const menuItems = [
    {
        href: '/vc-wallet',
        title: 'VC Wallet'
    },
    {
        href: '/marketplace',
        title: 'Marketplace'
    },
    {
        href: '/services',
        title: 'Services'
    },
    {
        href: '/issue-a-vc',
        title: 'Issue a VC'
    },
    {
        href: '/verifier',
        title: 'Verifier'
    },
    {
        href: '/event-logs',
        title: 'Event Logs'
    },
    {
        href: '/',
        title: 'Logout',
        onClick: Logout
    }
];

// eslint-disable-next-line complexity
const ChooseIcon: FC<{title: string}> = ({title}): JSX.Element => {
    switch (title) {
        case 'VC Wallet':
            return (
                <VCWalletIcon className="fill"/>
            );
        case 'Marketplace':
            return (
                <MarketplaceIcon className="stroke"/>
            );
        case 'Services':
            return (
                <ServicesIcon className="fill"/>
            );
        case 'Issue a VC':
            return (
                <IssueAVCIcon className="fillstroke"/>
            );
        case 'Verifier':
            return (
                <VerifierIcon className="fill"/>
            );
        case 'Event Logs':
            return (
                <EventLogsIcon className="stroke"/>
            );
        case 'Logout':
            return (
                <LogoutIcon className="fillstroke"/>
            );
        default:
            return (
                <></>
            );
    }
};

const SidePanel = (): JSX.Element => {
    const [opened, setOpened] = useState(false);
    const [isMounted, setIsMounted] = useState(false);
    const router = useRouter();
    const {data} = useWhoamiQuery();

    useEffect(() => {
        setIsMounted(true);
    }, []);

    useEffect(() => {
        ReactTooltip.rebuild();
    }, [data]);

    return (
        <Panel open={opened}>
            {data &&
            <UserInfo open={opened}>
                <Avatar>
                    <Image src={`https://avatars.dicebear.com/api/bottts/${data.whoami}.svg`} layout="fill" objectFit="cover"/>
                </Avatar>
                <UserTexts open={opened}>
                    <Did data-tip="Click to copy" margin="14px 0 0" onClick={() => {
                        navigator.clipboard.writeText(data.whoami);
                    }} style={{cursor: 'pointer'}}>{startAndEnd(data.whoami, 7)}</Did>
                    {/*<PublicKey>Public key:1812ab...bde0cd</PublicKey>*/}
                </UserTexts>
            </UserInfo>
            }
            <nav>
                <ul>
                    {menuItems.map(({href, title, onClick}) => (
                        <div key={title} onClick={
                            onClick
                                ? () => onClick()
                                : () => returnNothing()
                        }>
                            <Link href={href}>
                                <a>
                                    <li className={`${
                                        router.asPath === href ? 'active-link' : ''
                                    }`}>
                                        <ChooseIcon title={title}/>
                                        <Title open={opened}>{title}</Title>
                                    </li>
                                </a>
                            </Link>
                        </div>
                    ))}
                </ul>
            </nav>
            <BgClick onClick={() => setOpened(!opened)}/>
            {isMounted && <ReactTooltip/>}
        </Panel>
    );
};

const Panel = styled.aside<SidePanelProps>`
  position: absolute;
  left: 0;
  top: 0;
  width: ${(props) => props.open ? '140px' : '68px'};
  height: 100%;
  padding-top: 85px;
  background: #1b2f6c;
  cursor: pointer;

  ul {
    position: relative;
    z-index: 99;
    padding: 0;

    a {
      height: 100%;
      display: flex;
      align-items: center;
      color: #0BCDED;
      text-decoration: none;
      transition: all .2s;

      svg {
        transition: all .2s;
      }

      li {
        display: flex;
        align-items: center;
        height: 50px;
        list-style: none;
        padding: 12px 0 12px 23px;
        font-size: 13px;

        @media (min-width: 1400px) {
          padding: 12px 0 12px 28px;
          font-size: 14px;
        }
      }

      &:hover {
        color: white;

        .fill {
          fill: #FFFFFF;
        }

        .stroke {
          stroke: #FFFFFF;
        }

        .fillstroke {
          fill: #FFFFFF;
          stroke: #FFFFFF;
        }
      }
    }
  }

  @media (min-width: 1400px) {
    width: ${(props) => props.open ? '160px' : '78px'};
    padding-top: 78px;
  }
`;

const Title = styled.span<SidePanelProps>`
  display: ${(props) => props.open ? 'block' : 'none'};
  margin-top: 4px;
  margin-left: 14px;

  @media (min-width: 1400px) {
    margin-left: 16px;
  }
`;

const Did = styled(Body2)`
  &:hover {
    text-decoration: underline;
  }
  &:active {
    text-decoration: none;
  }
`;

const BgClick = styled.div`
  position: inherit;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 98;
  -webkit-transition: all .2s;
  -moz-transition: all .2s;
  -o-transition: all .2s;
  transition: all .2s;

  &:hover {
    //background: #253c79;
    box-shadow: 1px 11px 12px #0CCEEE;
  }
`;

const UserInfo = styled.div<SidePanelProps>`
  position: relative;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 20px;
  z-index: ${(props) => props.open ? '99' : '97'};
  cursor: auto;

  @media (min-width: 1400px) {
    margin-bottom: 30px;
  }
`;

const Avatar = styled.div`
  width: 40px;
  height: 40px;
  border: 2px solid #0BCDED;
  filter: drop-shadow(0px 4px 12px rgba(11, 205, 237, 0.51));
  border-radius: 20px;
  overflow: hidden;
`;

// const PublicKey = styled.span`
//   font-size: 10px;
//   color: #0BCDED;
// `;

const UserTexts = styled.div<SidePanelProps>`
  display: ${(props) => props.open ? 'inline' : 'none'};
`;

export default SidePanel;
