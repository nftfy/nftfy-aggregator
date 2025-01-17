import { useCollections } from '@reservoir0x/reservoir-kit-ui'
import { Button, message } from 'antd'
import styled from 'styled-components'
import FormatEth from '../../../../components/FormatEth'
import { chainConfig } from '../../../ChainConfig'
import { TokenImage } from '../TokenImage'
import blockExplorerIcon from '/public/assets/imgs/block-explorer.svg'
import discordIcon from '/public/assets/imgs/discord.svg'
import linkIcon from '/public/assets/imgs/link.svg'
import twitterIcon from '/public/assets/imgs/twitter.svg'
import websiteIcon from '/public/assets/imgs/website.svg'

interface NewheaderProps {
  chainId: number
  collectionId: string
}

export const BannerNfty = ({ collectionId, chainId }: NewheaderProps) => {
  const collectionResponse = useCollections({
    id: collectionId,
    includeTopBid: true
  })

  const collection = collectionResponse.data && collectionResponse.data[0] ? collectionResponse.data[0] : undefined
  const config = chainConfig(chainId)
  const handleCopyUrl = () => {
    navigator.clipboard.writeText(window?.location?.href).then(() => message.success('URL copied'))
  }
  const openInNewTab = (url: string) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
  }
  return (
    <Container
      className='relative z-0 col-span-full mb-0 flex w-full flex-col items-center bg-white px-[25px] dark:bg-black 
    sm:justify-center'
    >
      {collection?.banner ? (
        <Banner src={collection?.banner.replace('w=500', 'w=1337')} />
      ) : (
        <EmptyBanner className='max-h-[240px] min-h-[240px] w-full flex-col items-center bg-white px-[25px] py-6 dark:bg-black'>
          <span>{collection?.name}</span>
        </EmptyBanner>
      )}
      <CollectionContainer className='col-span-full flex w-full flex-row flex-wrap items-center gap-8 pt-6'>
        <CollectionTitle className='flex items-center justify-center gap-5'>
          <TokenImage diameter={64} address={collectionId} src={collection?.image} />
          <span className='m-0 text-xl font-semibold'>{collection?.name}</span>
        </CollectionTitle>
        <CollectionInfo className='flex items-center justify-center gap-5'>
          <div className='flex flex-col items-center justify-center'>
            <span className='text-sm font-semibold'>Floor Price</span>
            <FormatEth amount={collection?.floorAsk?.price?.amount?.native} maximumFractionDigits={6} logoWidth={12} />
          </div>
          <div className='flex flex-col items-center justify-center'>
            <span className='text-sm font-semibold'>1D Volume</span>
            <FormatEth amount={collection?.volume?.['1day']?.valueOf()} maximumFractionDigits={6} logoWidth={12} />
          </div>
          <div className='flex flex-col items-center justify-center'>
            <span className='text-sm font-semibold'>Supply</span>
            <span>{collection?.tokenCount ?? 0}</span>
          </div>
        </CollectionInfo>

        <NetworkSocial className='aling flex gap-2'>
          <Button
            icon={<img className='anticon' src={discordIcon.src} />}
            type='text'
            onClick={() => openInNewTab(String(collection?.discordUrl))}
          />
          <Button
            icon={<img className='anticon' src={twitterIcon.src} />}
            type='text'
            onClick={() => openInNewTab(`https://twitter.com/${collection?.twitterUsername}`)}
          />
          <Button
            icon={<img className='anticon' src={blockExplorerIcon.src} />}
            type='text'
            onClick={() => openInNewTab(`${config.blockExplorer}address/${collectionId}`)}
          />
          <Button
            icon={<img className='anticon' src={websiteIcon.src} />}
            type='text'
            onClick={() => openInNewTab(String(collection?.externalUrl))}
          />
          <Divider className='bg-slate-900' />
          <Button icon={<img className='anticon' src={linkIcon.src} />} type='text' onClick={handleCopyUrl} />
        </NetworkSocial>
      </CollectionContainer>
    </Container>
  )
}

const { Container, Banner, EmptyBanner, NetworkSocial, Divider, CollectionInfo, CollectionTitle, CollectionContainer } = {
  Banner: styled.img`
    width: 100%;
    max-height: 240px;
    border-radius: 24px;
    object-fit: cover;
  `,
  Container: styled.div`
    padding-top: 1.4rem;
  `,
  CollectionContainer: styled.div`
    padding-top: 1.2rem;
  `,
  EmptyBanner: styled.div`
    width: 100%;
    min-height: 180px;
    background: var(--gray-3);
    border-radius: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    > span {
      font-size: 38px;
      font-weight: 600;
      color: var(--gray-6);
    }

    @media (min-width: 1400px) {
      min-height: 240px;
    }
  `,
  Divider: styled.div`
    border: 1px solid;
    background: var(--gray-5);
    border: 1px solid var(--gray-5);
  `,
  NetworkSocial: styled.div`
    margin: 0 0 0 auto;
    @media (max-width: 320px) {
      width: 100%;
      justify-content: center;
      display: flex;
      align-items: center;
    }
  `,
  CollectionInfo: styled.div`
    @media (max-width: 320px) {
      width: 100%;
      justify-content: center;
      display: flex;
      align-items: center;
    }
  `,
  CollectionTitle: styled.div`
    @media (max-width: 320px) {
      width: 100%;
      justify-content: center;
      display: flex;
      align-items: center;
    }
  `
}
