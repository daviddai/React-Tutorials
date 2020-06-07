import React from 'react';

function Count({ text, count }) {
	console.log(`Rendering ${text}`);
	return <div>{text} - {count}</div>
}

// React.memo avoids re-render when props and state did not change
export default React.memo(Count);
