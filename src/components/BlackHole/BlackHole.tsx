import React from "react";
import styles from './BlackHole.module.scss';

const BlackHole = () => {
	return (
		<div className={styles.blackHoleContainer}>
			<video
				autoPlay
				muted
				loop
				className={styles.blackHoleVideo}
			>
				<source src="/blackhole.webm" type="video/webm" />
			</video>
		</div>
	);
};

export default BlackHole;