import React, { useEffect, useRef } from 'react';

const LazyLoadImg = ({ url }) => {
	const imgRef = useRef();

	useEffect(() => {
		const img = imgRef.current;

		const observer = new IntersectionObserver((entries) => {
			if (entries[0].isIntersecting) {
				img.setAttribute('src', url);
			}
		});

		if (img) observer.observe(img);

		return () => {
			observer.disconnect();
		};
	}, []);

	return <img loading='eager' alt={url} ref={imgRef} width={'100%'} />;
};

export default LazyLoadImg;
