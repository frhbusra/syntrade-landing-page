import { Container } from '@/components/Container'
import RiseFall from '@/images/logos/rise_fall-type.svg?component'
import EvenOdd from '@/images/logos/even_odd-type.svg?component'
import MatchesDiffers from '@/images/logos/matches_differs-type.svg?component'

const features = [
  {
    name: 'Rise/Fall',
    description:
      'It’s about prediction of the exit spot will be higher or lower than the entry spot.',
    icon: RiseFallIcon,
  },
  {
    name: 'Even/Odd',
    description:
      'It’s about prediction of the last tick of a contract that will be an even number or odd number.',
    icon: EvenOddIcon,
  },
  {
    name: 'Matches/Differs',
    description:
      'It’s about prediction of the last tick where which number will be the last digit of the last tick of a contract.',
    icon: MatchesDiffersIcon,
  },
]

function RiseFallIcon() {
  return <img src={RiseFall.src} alt="Rise/Fall Icon" className="h-14 w-14" />
}

function EvenOddIcon() {
  return <img src={EvenOdd.src} alt="Even/Odd Icon" className="h-14 w-14" />
}

function MatchesDiffersIcon() {
  return (
    <img
      src={MatchesDiffers.src}
      alt="Matches/Differs Icon"
      className="h-14 w-14"
    />
  )
}

export function TradeTypes() {
  return (
    <section
      id="trade-types"
      aria-label="Features for building a portfolio"
      className="py-20 sm:py-32"
    >
      <Container>
        <div
          id="trade-types-container"
          className="mx-auto max-w-2xl sm:text-center"
        >
          <h2 className="text-center text-3xl font-semibold tracking-tight text-gray-900">
            Trade types we offer
          </h2>
          <p className="mt-2 text-center text-lg text-gray-900">
            Our trade types offer different ways of earning fixed payouts from
            correctly predicting market movements using only a fixed stake.
          </p>
        </div>
        <ul
          id="trade-types-list"
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 text-sm sm:mt-20 sm:grid-cols-2 md:gap-y-10 lg:max-w-none lg:grid-cols-3"
        >
          {features.map((feature) => (
            <li
              key={feature.name}
              className="justify-center rounded-2xl border border-gray-200 p-8"
            >
              <feature.icon className="h-8 w-8" />
              <h3 className="mt-6 font-semibold text-gray-900">
                {feature.name}
              </h3>
              <p className="mt-2 text-gray-700">{feature.description}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
