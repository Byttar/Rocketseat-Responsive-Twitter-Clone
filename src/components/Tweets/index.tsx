import React from 'react';

import {
  Container,
  Retweeted,
  RocketseatIcon,
  Body,
  Avatar,
  Content,
	Header,
	Dot,
  Description,
  ImageContent,
  Icons,
  Status,
  CommentIcon,
  RetweetIcon,
  LikeIcon,
} from './styles';

const Tweets: React.FC = () => {
  return (
    <Container>
      <Retweeted>
        <RocketseatIcon/>
				Você Retweetou
      </Retweeted>
      <Body>
        <Avatar />

        <Content>
          <Header>
            <strong>Eduzz</strong>
            <p>@Eduzz</p>
            <Dot />
            <time>27 de Jun</time>
          </Header>

          <Description>
						Foguete não tem ré!
					</Description>

          <ImageContent />

          <Icons>
            <Status>
              <CommentIcon />
              24
            </Status>
            <Status>
              <RetweetIcon />
              323
            </Status>
            <Status>
              <LikeIcon />
              1.203
            </Status>
          </Icons>
        </Content>
      </Body>
    </Container>
  );
};

export default Tweets;
