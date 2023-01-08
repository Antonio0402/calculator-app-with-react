import React from 'react';

function Header({themeToggle, setThemeToggle}) {
  const toggles = ["theme1", "theme2", "theme3"];
  return (
    <div className='bg-inherit px-0 py-8 w-full flex justify-between items-center'>
      <h1 className='text-500 text-text-base'>calc</h1>
      <div className='text-300 text-text-base flex gap-[26px] '>
        <p className='self-end py-[5px]'>THEME</p>
        <div className='space-y-2'>
          <div className='flex justify-center gap-2.5'>
            <p>1</p>
            <p>2</p>
            <p>3</p>
          </div>
          <div 
          className={'keypad ' + (themeToggle.theme === "theme2" 
            ? "before:translate-x-full"
            : themeToggle.theme === "theme3" 
              ? "before:translate-x-[200%]"
              : "before:translate-x-0") 
          }>
          {toggles.map((toggle, idx) => {
            return (
              <label key={idx} className='w-5 h-5 cursor-pointer' htmlFor={toggle}>
                <input className='sr-only' type="radio" name="theme" id={toggle} value={toggle} checked={themeToggle.theme === toggle} onChange={(e) => setThemeToggle({theme: e.target.value})}/>
              </label>
            )
          })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header