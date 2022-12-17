import { MainContainer } from '@components/container';
import { Icon } from '@components/icons';
import React, { useCallback, useState } from 'react';
import { FAQ_QUESTIONS, IInitState, INITIAL_STATE } from './faq-page.constants';
import { FaqPageStyles as Styled } from './faq-page.styles';

export const FaqPage = () => {
  const [isActive, setIsActive] = useState(INITIAL_STATE);

  const handleClick = (name: keyof IInitState) => {
    setIsActive((state) => ({ ...state, [name]: !state[name] }));
  };
  return (
    <MainContainer>
      <Styled.ContentContainer>
        <Styled.TitleSection>
          <Styled.h2>
            FA<span>Q</span>
            <p>Not sure about something? You can check out our FAQs.</p>
          </Styled.h2>
        </Styled.TitleSection>

        <Styled.QustionSection>
          {FAQ_QUESTIONS.map((question) => {
            const onClick = useCallback(
              () => handleClick(question.name as keyof IInitState),
              [question.name]
            );
            return (
              <Styled.QuestionTale
                onClick={onClick}
                isActive={isActive[question.name as keyof IInitState]}
                key={question.name}
              >
                <Styled.Circle />
                <span>{question.title}</span>

                <div className="panel">
                  <p>{question.description}</p>
                </div>

                <Styled.IconWrapper>
                  {isActive[question.name as keyof IInitState] ? (
                    <Icon type="minus" />
                  ) : (
                    <Icon type="plus" />
                  )}
                </Styled.IconWrapper>
              </Styled.QuestionTale>
            );
          })}
        </Styled.QustionSection>
      </Styled.ContentContainer>
    </MainContainer>
  );
};
