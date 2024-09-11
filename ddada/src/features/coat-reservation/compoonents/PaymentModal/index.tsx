'use client'

import { useState } from 'react'

import { MATCH_INFO } from '@/features/coat-reservation/constants/coat-reservation.ts'
import ModalCloseIcon from '@/static/imgs/coat-reservation/coat-reservation_modalclose_icon.svg'
import CheckedIcon from '@/static/imgs/coat-reservation/coat-reservation_payment_checked_icon.svg'
import UnCheckedIcon from '@/static/imgs/coat-reservation/coat-reservation_paymenty_unchecked_icon.svg'

interface PaymentModalProps {
  closeModal: () => void
}

export default function PaymentModal({ closeModal }: PaymentModalProps) {
  const [competitionType, setCompetitionType] = useState('친선')
  const [matchType, setMatchType] = useState('혼합복식')

  const handleCloseModal = () => {
    closeModal()
  }

  const handlePayment = () => {
    // todo 결제하기로 넘어가기 구현
    console.log('결제하기')
    closeModal()
  }
  return (
    <>
      <div
        className="fixed left-0 top-0 z-10 h-screen w-screen overflow-hidden"
        onClick={closeModal}
        aria-hidden="true"
      />
      {/* height 수정 필요 */}
      <div className="flex flex-col gap-6 fixed top-0 left-1/3 z-20 w-[35rem] h-[43.75rem] bg-white rounded-xl overflow-hidden drop-shadow-lg py-4 px-6">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold">예약 및 결제 </h2>
          <button
            type="button"
            onClick={closeModal}
            aria-label="예약 및 결제 닫기"
          >
            <ModalCloseIcon />
          </button>
        </div>
        <div className="flex-col gap-3 px-6 py-3 border border-3.5 border-black rounded-xl border text-lg font-bold">
          {/* todo 나중에 정보 추가 props로 받을 예정 */}
          <p>코트에 대한 이름</p>
          <p>날짜(요일) 시간</p>
        </div>
        <div>
          <hr />
        </div>
        <div className="flex flex-col gap-3 ">
          <h3 className="text-lg font-bold">매치정보 선택</h3>
          <div className="flex flex-col gap-2">
            <p>경쟁여부</p>

            <div>
              <button
                type="button"
                onClick={() => setCompetitionType('친선')}
                className="flex items-center gap-2"
              >
                {competitionType === '친선' ? (
                  <CheckedIcon />
                ) : (
                  <UnCheckedIcon />
                )}
                친선
                <p className="text-[#FCA211]">
                  (승리와 패배에 따른 실력점수와 등락이 없습니다.)
                </p>
              </button>
              <button
                type="button"
                onClick={() => setCompetitionType('경쟁')}
                className="flex items-center gap-2"
              >
                {competitionType === '경쟁' ? (
                  <CheckedIcon />
                ) : (
                  <UnCheckedIcon />
                )}
                경쟁
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <p>매치타입</p>
            <div>
              {MATCH_INFO.matchType.map((type) => (
                <button
                  key={type}
                  type="button"
                  onClick={() => setMatchType(type)}
                  className="flex items-center gap-2"
                >
                  {matchType === type ? <CheckedIcon /> : <UnCheckedIcon />}
                  {type}
                </button>
              ))}
            </div>
          </div>
        </div>
        <div>
          <hr />
        </div>
        <div className="flex flex-col gap-1">
          <h3 className="text-lg font-bold">결제 정보</h3>

          <div className="flex justify-between">
            <p>매치 가격</p>
            {/* todo 여기에 받은 결제값넣기 */}
            <p>5,000원</p>
          </div>
          <div className="flex justify-between">
            <p>첫 예약 할인</p>
            <p>-1,000원</p>
          </div>

          <div>
            <hr />
          </div>
          <div className="flex justify-between">
            <p className="font-bold">첫 결제 금액</p>
            <p>4,000원</p>
          </div>
        </div>
        <div className="flex gap-6">
          <button
            type="button"
            className="text-[#FCA211] border border-[#FCA211] rounded px-4 py-2 border border-[#E5E5ED] grow"
            onClick={handleCloseModal}
          >
            닫기
          </button>
          <button
            type="button"
            className="text-white bg-[#FCA211] rounded px-4 py-2 grow"
            onClick={handlePayment}
          >
            결제하기
          </button>
        </div>
      </div>
    </>
  )
}
