interface Props {
  className: string
}

const Logo: React.FC<Props> = ({ className }) => {
  return (
    <svg
      fill="none"
      height="33"
      viewBox="0 0 280 33"
      width="280"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      className={className}
    >
      <clipPath id="a">
        <path d="m0 0h280v32.9523h-280z" />
      </clipPath>
      <g clip-path="url(#a)" fill="#000">
        <path d="m57.2981 14.4363v3.3494h-4.4511v12.7112h-4.0608v-12.7112h-4.3819v-3.3494z" />
        <path d="m59.0234 13.9075h3.9475v6.2643c.8499-1.2655 2.0209-1.8132 3.5319-1.8132 3.4627 0 4.1993 2.8898 4.1993 5.4837v6.6546h-3.9475v-6.4217c0-1.3536-.4344-2.5435-1.8824-2.5435-1.4229 0-1.9076 1.1899-1.9076 2.5435v6.4217h-3.9475v-16.5894z" />
        <path d="m72.5151 24.5978c0-3.3934 2.5498-6.2392 6.6295-6.2392 3.6012 0 6.3336 2.2225 6.3336 6.4218 0 .1637 0 .3462-.0189.5036h-9.1541c.0441 1.0766 1.2844 2.2917 3.532 2.2917 1.1458 0 2.2287-.4155 3.2612-1.2843.3211.3211 1.6306 1.9517 1.9517 2.2476-1.5865 1.6747-3.6264 2.2035-5.5529 2.2035-4.4134.0063-6.9821-2.7513-6.9821-6.1447zm3.8279-1.4229h5.4144c-.1385-1.3536-1.4669-1.8824-2.638-1.8824-1.1206 0-2.5435.5037-2.7764 1.8824z" />
        <path d="m93.0898 30.4969v-16.0606h6.9502c4.609 0 8.078 3.6012 8.078 8.0271 0 4.4512-3.463 8.0335-8.078 8.0335zm4.0608-3.3494h2.1343c3.0281 0 4.7471-2.0209 4.7471-4.6778 0-2.6631-1.719-4.6778-4.7471-4.6778h-2.1343z" />
        <path d="m116.221 30.7488c-3.696 0-6.699-2.7513-6.699-6.1951s3.009-6.1951 6.699-6.1951c3.714 0 6.698 2.7765 6.698 6.1951 0 3.4187-2.984 6.1951-6.698 6.1951zm0-3.2612c1.7 0 2.889-1.2151 2.889-2.9339 0-1.7187-1.196-2.959-2.889-2.959-1.7 0-2.89 1.2403-2.89 2.959 0 1.7188 1.19 2.9339 2.89 2.9339z" />
        <path d="m130.972 18.3586c1.441 0 3.185.3904 4.955 1.8132-.322.4785-1.537 2.1091-1.858 2.5939-1.057-.9381-2.247-1.1018-2.864-1.1018-1.814 0-3.073 1.1962-3.073 2.8898 0 1.6999 1.259 2.915 3.073 2.915.598 0 1.813-.1637 2.864-1.1018.321.4785 1.536 2.1091 1.858 2.5939-1.77 1.4228-3.514 1.788-4.955 1.788-4.061 0-6.812-2.7072-6.812-6.1951s2.751-6.1951 6.812-6.1951z" />
        <path d="m142.839 30.7488c-2.09 0-4.312-.7995-4.312-4.2685v-4.8856h-1.719v-2.9842h2.065l.529-2.9149h3.053v2.9149h3.123v2.9842h-3.123v5.0933c0 .5289.227.9192.756.9192.598 0 .8-.5288.8-1.0325 0-.4155-.114-.8688-.183-1.0325h2.82c.227.4092.322.9633.347 1.4229-.007 2.3798-1.656 3.7837-4.156 3.7837z" />
        <path d="m154.468 30.7488c-3.696 0-6.699-2.7513-6.699-6.1951s3.009-6.1951 6.699-6.1951c3.714 0 6.699 2.7765 6.699 6.1951 0 3.4187-2.978 6.1951-6.699 6.1951zm0-3.2612c1.7 0 2.89-1.2151 2.89-2.9339 0-1.7187-1.197-2.959-2.89-2.959-1.7 0-2.89 1.2403-2.89 2.959 0 1.7188 1.196 2.9339 2.89 2.9339z" />
        <path d="m166.927 21.1539c.39-2.2476 2.43-2.8016 3.305-2.8016.366 0 .41 0 .806.0692v3.8531c-.529-.1385-1.171-.1637-1.492-.1637-1.536 0-2.48.9884-2.48 2.4302v5.9432h-3.948v-11.8739h3.809z" />
        <path d="m172.455 20.2851c1.032-.5036 1.7-1.5613 1.718-2.5435-1.145.0252-1.857-.9381-1.857-1.8132-.044-1.1269.737-2.0209 2.134-2.0209 1.675 0 2.135 1.511 2.135 2.3168 0 2.1784-1.146 4.5456-3.236 5.3893z" />
        <path d="m178.832 26.2473c.296 1.2592 1.329 1.6306 2.273 1.6306.712 0 1.379-.2266 1.379-.7807 0-.3211-.208-.5036-.85-.7806l-1.971-.8248c-1.882-.6862-3.166-1.8573-3.166-3.532 0-2.1783 2.178-3.6012 4.841-3.6012 1.65 0 3.488.5478 4.52 2.7072l-2.959 1.127c-.295-.8688-1.12-1.0577-1.605-1.0577-.642 0-1.127.3211-1.127.7996 0 .4155.39.6421.989.8499l1.58.6422c2.751 1.0073 3.444 2.4113 3.444 3.6704 0 2.3861-2.412 3.6453-5.119 3.6453-2.203 0-4.451-.8247-5.093-3.3494z" />
        <path d="m197.928 30.4969h-4.061v-16.0606h4.061v7.1835l4.382-7.1835h4.105v.5477l-4.659 7.2276 1.788 3.4438c.85 1.6495 1.265 1.8132 2.09 1.8132.296 0 .737-.1637 1.121-.4155.434.9633.894 1.8824 1.328 2.8205-1.196.6422-2.021.8688-3.236.8688-1.926 0-3.67-.9884-4.747-3.3242l-2.178-4.3818v7.4605z" />
        <path d="m211.281 13.6558c1.442 0 2.361.8499 2.361 2.0209 0 1.1459-.963 1.9958-2.361 1.9958-1.422 0-2.361-.8499-2.361-1.9958-.006-1.1773.888-2.0209 2.361-2.0209zm-1.995 4.9548h3.947v11.8865h-3.947z" />
        <path d="m221.103 30.7488c-2.091 0-4.313-.7995-4.313-4.2685v-4.8856h-1.719v-2.9842h2.065l.529-2.9149h3.054v2.9149h3.122v2.9842h-3.122v5.0933c0 .5289.226.9192.755.9192.598 0 .8-.5288.8-1.0325 0-.4155-.114-.8688-.183-1.0325h2.821c.226.4092.321.9633.346 1.4229-.006 2.3798-1.656 3.7837-4.155 3.7837z" />
        <path d="m233.304 18.3586c1.448 0 3.185.3904 4.955 1.8132-.322.4785-1.537 2.1091-1.858 2.5939-1.057-.9381-2.247-1.1018-2.871-1.1018-1.813 0-3.072 1.1962-3.072 2.8898 0 1.6999 1.259 2.915 3.072 2.915.599 0 1.814-.1637 2.871-1.1018.321.4785 1.536 2.1091 1.858 2.5939-1.77 1.4228-3.513 1.788-4.955 1.788-4.061 0-6.812-2.7072-6.812-6.1951s2.751-6.1951 6.812-6.1951z" />
        <path d="m239.984 13.9075h3.947v6.2643c.85-1.2655 2.021-1.8132 3.532-1.8132 3.463 0 4.2 2.8898 4.2 5.4837v6.6546h-3.948v-6.4217c0-1.3536-.434-2.5435-1.882-2.5435-1.423 0-1.908 1.1899-1.908 2.5435v6.4217h-3.947v-16.5894z" />
        <path d="m253.476 24.5978c0-3.3934 2.549-6.2392 6.629-6.2392 3.601 0 6.334 2.2225 6.334 6.4218 0 .1637 0 .3462-.019.5036h-9.154c.044 1.0766 1.284 2.2917 3.532 2.2917 1.145 0 2.228-.4155 3.261-1.2843.321.3211 1.63 1.9517 1.952 2.2476-1.587 1.6747-3.627 2.2035-5.553 2.2035-4.414.0063-6.982-2.7513-6.982-6.1447zm3.827-1.4229h5.415c-.139-1.3536-1.467-1.8824-2.638-1.8824-1.121 0-2.544.5037-2.777 1.8824z" />
        <path d="m268.321 18.6105h3.948v1.5613c.85-1.2591 2.021-1.8132 3.532-1.8132 3.462 0 4.199 2.8898 4.199 5.4837v6.6547h-3.947v-6.4218c0-1.1458-.435-2.5498-1.883-2.5498-1.423 0-1.901 1.1962-1.901 2.5498v6.4218h-3.948z" />
        <path d="m28.539 16.2685c1.9957-1.6432 4.2496-3.3683 5.1625-3.6579 2.2099-.6988 1.5551-2.80791.7807-3.90338-.7807-1.09547-2.7135-2.15946-3.8782-.4533-.7555 1.10177-5.4018 4.04188-7.7879 5.50888-.6611.4092-1.3473.7806-2.0399 1.1269l-20.486552-3.6327c-1.781718 10.0418 4.910732 19.6304 14.958852 21.4121 10.0418 1.7817 19.6303-4.917 21.4121-14.9589zm-12.6798 12.9505c-6.84355-1.2151-11.91798-7.0261-12.32721-13.8319l28.65851 5.087c-2.7323 6.2517-9.4941 9.96-16.3313 8.7449z" />
        <path d="m14.5433 11.8362c-.0126.0504-.107.1134-.1511.1134-1.278-.0945-2.4931-.3967-3.5949-1.0766-1.22137-.7555-2.02094-1.8384-2.44276-3.20459-.36516-1.18991-.40923-2.405-.25183-3.63269.03148-.24554.05036-.25813.2959-.22665 1.32842.1574 2.62539.42182 3.80269 1.08918 1.4921.84364 2.3672 2.11539 2.5939 3.81526 0-.01259.2707 1.81319-.2519 3.12269z" />
        <path d="m27.3994.528836c.0063-.056662-.0692-.163691-.1259-.176283-1.4354-.3714526-2.8835-.491073-4.3441-.151099-1.6243.377749-2.9024 1.271756-3.8719 2.612766-.8437 1.17102-1.3473 2.49314-1.6243 3.89711-.0567.28331-.0441.3022.2392.35886 1.511.32108 3.0346.50996 4.5771.21406 1.9517-.37146 3.3871-1.44175 4.2622-3.22346.0063.00629.9759-1.89504.8877-3.531954z" />
        <path d="m20.4927 11.2127c.1574-.8814-.4344-1.72501-1.3158-1.88241-.8815-.15739-1.7251.43441-1.8825 1.31581s.4344 1.7251 1.3158 1.8825 1.7251-.4344 1.8825-1.3159z" />
      </g>
    </svg>
  );
};

export default Logo;