import React from "react";

export const TemporalCloud = () => {
  return (
    <section
      id="cloud"
      className="max-w-7xl rounded-lg p-5 mt-24 mb-12 bg-[color:var(--ifm-card-background-color)] flex items-center space-x-5"
    >
      <svg
        className="flex-none w-12 h-12 "
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M36 0H12C5.37258 0 0 5.37258 0 12V36C0 42.6274 5.37258 48 12 48H36C42.6274 48 48 42.6274 48 36V12C48 5.37258 42.6274 0 36 0Z"
          fill="var(--ifm-color)"
        />
        <path
          d="M30.3095 17.6905C29.4593 11.3193 27.3067 6 24 6C20.6942 6 18.5416 11.3184 17.6905 17.6905C11.3193 18.5407 6 20.6933 6 24C6 27.3058 11.3193 29.4584 17.6905 30.3095C18.5407 36.6798 20.6933 42 24 42C27.3058 42 29.4584 36.6807 30.3095 30.3095C36.6807 29.4584 42 27.3067 42 24C42 20.6933 36.6798 18.5407 30.3095 17.6905ZM17.4833 28.4526C11.381 27.5711 7.82284 25.5539 7.82284 23.9991C7.82284 22.4443 11.3819 20.4271 17.4833 19.5456C17.3488 21.0147 17.2788 22.5143 17.2788 23.9991C17.2788 25.4839 17.3488 26.9853 17.4833 28.4526ZM24.0009 7.82192C25.5557 7.82192 27.5729 11.381 28.4544 17.4823C26.9862 17.3479 25.4857 17.2779 24.0009 17.2779C22.5161 17.2779 21.0157 17.3479 19.5474 17.4823C20.4289 11.3801 22.4461 7.82192 24.0009 7.82192ZM30.5177 28.4526C30.2174 28.4968 28.985 28.6405 28.6736 28.6718C28.6432 28.984 28.4977 30.2155 28.4544 30.5158C27.5729 36.6181 25.5557 40.1772 24.0009 40.1772C22.4461 40.1772 20.4289 36.6181 19.5474 30.5158C19.5041 30.2155 19.3586 28.9831 19.3282 28.6718C19.1864 27.2257 19.1007 25.6718 19.1007 23.9991C19.1007 22.3273 19.1864 20.7734 19.3282 19.3255C20.7743 19.1836 22.3282 19.0979 24.0009 19.0979C25.6727 19.0979 27.2266 19.1836 28.6736 19.3255C28.9859 19.3558 30.2174 19.5014 30.5177 19.5447C36.6199 20.4262 40.1799 22.4443 40.1799 23.9982C40.179 25.552 36.6199 27.5711 30.5177 28.4526Z"
          fill="var(--ifm-background-color)"
        />
      </svg>
      <p className="block my-3">
        Temporal Cloud is a fully managed cloud offering of the open-source
        Server. We are currently accepting private Design Partners.{" "}
        <a
          href="https://temporal.io/cloud"
          className="text-blue-400 hover:text-blue-200 underline"
        >
          Apply here!
        </a>
      </p>
    </section>
  );
};