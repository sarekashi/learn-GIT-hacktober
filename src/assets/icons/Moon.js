import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

const Moon = ({ size = 512, color = '#000' }) => {
	return (
		<Svg width={size} height={size} viewBox='0 0 512 512'>
			<Path
				d='M160 136c0-30.62 4.51-61.61 16-88C99.57 81.27 48 159.32 48 248c0 119.29 96.71 216 216 216 88.68 0 166.73-51.57 200-128-26.39 11.49-57.38 16-88 16-119.29 0-216-96.71-216-216z'
				fill='none'
				stroke={color}
				strokeLinecap='round'
				strokeLinejoin='round'
				strokeWidth={32}
			/>
		</Svg>
	)
}

export default Moon
