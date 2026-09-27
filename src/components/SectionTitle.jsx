import React from 'react';

function SectionTitle({  title, description, icon }) {
  return (
    <div className="mb-11">
    

      <div className="flex items-center gap-3">
        {icon && (
          <div className="flex items-center text-slate-50 [&>svg]:w-9 [&>svg]:h-9">
            {icon}
          </div>
        )}
        <h2 className="text-4xl font-bold tracking-tight text-slate-50">
          {title}
        </h2>
      </div>

     
      {description && (
        <p className="mt-2 text-base text-slate-400 max-w-2xl">
          {description}
        </p>
      )}
    </div>
  );
}

export default SectionTitle;