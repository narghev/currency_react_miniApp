import React from 'react';

export default ({currencies})=>{
    const content = currencies.map((curr, idx)=>{
	return (
	    <button
	       key={idx}
	       value={curr}
	       >
	      {curr}
	    </button>
	);
    });
    return (
	<div>
	  <div className="currencies">
	    {content}
	  </div>
	</div>
    );
}
