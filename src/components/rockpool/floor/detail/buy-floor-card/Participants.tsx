import { UserOutlined } from '@ant-design/icons'
import { Button, Empty, List, Typography } from 'antd'
import styled from 'styled-components'
import { Buyer } from '../../../../../graphql/nftfy/rockpool/SpecificPoolItemBuyer'
import InviteCard from '../../../detail/Participants/InviteCard'
import Participant from '../../../detail/Participants/Participant'
import { modalParticipantsVar, ParticipantsModal } from './ParticipantsModal'

interface ParticipantsProps {
  chainId: number
  buyersLoading?: boolean
  buyers: Buyer[]
  poolProgress: number
  walletAddress: string
}

export default function Participants({ chainId, buyers, buyersLoading, poolProgress, walletAddress }: ParticipantsProps) {
  const { Text } = Typography

  return (
    <Content>
      <TitleParticipants>
        <UserOutlined style={{ fontSize: '18px' }} />
        <Text> {`${buyers?.length} ${buyers?.length === 1 ? 'Participant' : 'Participants'}`}</Text>
        {buyers.length > 3 && (
          <Button type='primary' ghost shape='round' size='small' onClick={() => modalParticipantsVar(true)}>
            See all
          </Button>
        )}
      </TitleParticipants>
      {buyers?.length ? (
        <List
          itemLayout='horizontal'
          dataSource={buyers.slice(0, 3)}
          loading={buyersLoading}
          renderItem={item => <Participant amount={item.amount} chainId={chainId} buyer={item.buyer} />}
        />
      ) : (
        <Empty
          image={Empty.PRESENTED_IMAGE_SIMPLE}
          imageStyle={{
            height: 100
          }}
          description='There are no participants in this pool yet'
        />
      )}
      {buyers?.length === 1 && poolProgress < 100 && <InviteCard owner={buyers[0].buyer.toLowerCase() === walletAddress.toLowerCase()} />}
      <ParticipantsModal buyers={buyers} chainId={chainId} />
    </Content>
  )
}

const { Content, TitleParticipants } = {
  Content: styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 16px;
  `,
  TitleParticipants: styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8px;
  `
}
