import { useEffect, useState } from "react";
import "./Resonate.scss";
import { useLocation, useNavigate } from "react-router-dom";

const Resonate = () => {
  const options = [
    {
      name: "Earth",
      svg: '<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="19.5901" cy="19.9591" r="19.5198" fill="white"></circle><path d="M20.6222 0.623962H19.3867V39.3763H20.6222V0.623962Z" fill="#066FDE"></path><path d="M20.6231 30.7402H19.3877C19.3877 27.1561 17.0146 24.9421 15.0085 23.7188C12.5987 22.2387 9.39378 21.3457 6.44577 21.3457C4.195 21.3457 1.57727 21.9329 1.57727 23.5843H0.341797C0.341797 21.4314 2.67818 20.098 6.44577 20.098C9.6262 20.098 13.0635 21.0521 15.6568 22.6546C18.9106 24.6607 20.6231 27.4497 20.6231 30.7402Z" fill="#066FDE"></path><path d="M20.6244 23.0459H19.389C19.389 20.685 18.5205 19.0459 16.6734 17.8716C14.9731 16.7951 12.6978 16.2569 10.496 15.7431C6.70395 14.8502 2.77734 13.9327 2.77734 10.0306H4.01282C4.01282 11.3517 4.59997 12.2691 5.89661 12.9908C7.15655 13.6881 8.91802 14.104 10.7773 14.5321C13.077 15.0703 15.4624 15.633 17.3339 16.8196C19.548 18.2263 20.6244 20.2569 20.6244 23.0459Z" fill="#066FDE"></path><path d="M20.6233 39.3763H19.3879C19.3879 35.6943 17.394 33.3946 15.7304 32.1102C13.7732 30.6056 11.1187 29.676 8.79459 29.676C6.17685 29.676 5.24719 30.7769 5.24719 31.7922H4.01172C4.01172 30.7035 4.52548 29.8105 5.50407 29.2111C6.33588 28.6974 7.47349 28.4283 8.79459 28.4283C11.4123 28.4283 14.2869 29.4313 16.4888 31.1194C18.3726 32.5873 20.6233 35.1928 20.6233 39.3763Z" fill="#066FDE"></path><path d="M20.6236 15.9753H19.3882C19.3882 13.5166 18.0915 12.5013 16.4524 11.2169C14.4096 9.61448 11.8652 7.62059 11.8652 2.14047H13.1007C13.1007 7.02121 15.1924 8.66035 17.2108 10.2383C18.8866 11.5594 20.6236 12.9172 20.6236 15.9753Z" fill="#066FDE"></path><path d="M20.6222 30.7402H19.3867C19.3867 27.4497 21.0993 24.6607 24.3531 22.6546C26.9463 21.0521 30.3959 20.098 33.5641 20.098C37.3317 20.098 39.6681 21.4314 39.6681 23.5843H38.4326C38.4326 22.5445 37.1604 21.3457 33.5641 21.3457C30.6038 21.3457 27.4112 22.2265 25.0014 23.7188C23.0075 24.9421 20.6222 27.1561 20.6222 30.7402Z" fill="#066FDE"></path><path d="M20.6222 23.0459H19.3867C19.3867 20.2691 20.4632 18.2263 22.6772 16.8196C24.5488 15.633 26.9341 15.0703 29.2338 14.5321C31.0931 14.0917 32.8424 13.6881 34.1145 12.9908C35.4234 12.2691 35.9983 11.3517 35.9983 10.0306H37.2338C37.2338 13.9327 33.3072 14.8502 29.5152 15.7431C27.3133 16.2569 25.0381 16.7951 23.3378 17.8716C21.4907 19.0459 20.6222 20.685 20.6222 23.0459Z" fill="#066FDE"></path><path d="M20.6222 39.3763H19.3867C19.3867 35.1805 21.6375 32.575 23.5335 31.1194C25.7353 29.4313 28.61 28.4283 31.2277 28.4283C32.5488 28.4283 33.6864 28.6974 34.5182 29.2111C35.4968 29.8105 36.0106 30.7035 36.0106 31.7922H34.7751C34.7751 30.7646 33.8454 29.676 31.2277 29.676C28.9035 29.676 26.2491 30.6056 24.2919 32.1102C22.6161 33.3946 20.6222 35.6943 20.6222 39.3763Z" fill="#066FDE"></path><path d="M20.6222 15.9753H19.3867C19.3867 12.9172 21.1237 11.5594 22.7996 10.2383C24.8179 8.64812 26.9097 7.02121 26.9097 2.14047H28.1451C28.1451 7.62059 25.6008 9.61448 23.558 11.2169C21.9188 12.5013 20.6222 13.5166 20.6222 15.9753Z" fill="#066FDE"></path><path d="M20 40C14.6544 40 9.63914 37.9205 5.85932 34.1407C2.07951 30.3609 0 25.3456 0 20C0 14.6544 2.07951 9.63915 5.85932 5.85933C9.63914 2.07951 14.6544 0 20 0C25.3456 0 30.3609 2.07951 34.1407 5.85933C37.9205 9.63915 40 14.6544 40 20C40 25.3456 37.9205 30.3609 34.1407 34.1407C30.3731 37.9205 25.3456 40 20 40ZM20 1.24771C14.9847 1.24771 10.2752 3.2049 6.74006 6.74007C3.19266 10.2875 1.2477 14.9969 1.2477 20C1.2477 25.0153 3.20489 29.7248 6.74006 33.2599C10.2875 36.8073 14.9969 38.7523 20 38.7523C25.0153 38.7523 29.7248 36.7951 33.2599 33.2599C36.8073 29.7125 38.7523 25.0031 38.7523 20C38.7523 14.9847 36.7951 10.2752 33.2599 6.74007C29.7248 3.19267 25.0153 1.24771 20 1.24771Z" fill="#066FDE"></path></svg>',
    },
    {
      name: "Water",
      svg: '<svg width="41" height="40" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="19.5901" cy="20.0286" r="19.5198" fill="white"></circle><path d="M20.0008 7.37594C18.5696 7.37594 16.7347 6.50743 14.802 5.59C13.0772 4.77043 11.2913 3.9264 10.1414 3.9264C9.79892 3.9264 9.51758 3.64505 9.51758 3.30254C9.51758 2.96003 9.79892 2.67869 10.1414 2.67869C11.5726 2.67869 13.4075 3.54719 15.3402 4.46462C17.065 5.28419 18.8509 6.12823 20.0008 6.12823C20.906 6.12823 22.5451 5.16187 23.9885 4.31783C25.7255 3.30254 27.3647 2.33618 28.6001 2.33618C28.9427 2.33618 29.224 2.61753 29.224 2.96003C29.224 3.30254 28.9427 3.58389 28.6001 3.58389C27.6949 3.58389 26.0558 4.55025 24.6124 5.39429C22.8876 6.40958 21.2485 7.37594 20.0008 7.37594Z" fill="#066FDE"></path><path d="M20 40C14.6544 40 9.63914 37.9205 5.85932 34.1407C2.07951 30.3609 0 25.3456 0 20C0 14.6544 2.07951 9.63914 5.85932 5.85933C9.63914 2.07951 14.6544 0 20 0C25.3456 0 30.3609 2.07951 34.1407 5.85933C37.9205 9.63914 40 14.6544 40 20C40 25.3456 37.9205 30.3609 34.1407 34.1407C30.3609 37.9205 25.3456 40 20 40ZM20 1.23547C14.9847 1.23547 10.2752 3.19266 6.74006 6.72783C3.19266 10.2752 1.2477 14.9847 1.2477 19.9878C1.2477 25.0031 3.20489 29.7125 6.74006 33.2477C10.2875 36.7951 14.9969 38.7401 20 38.7401C25.0153 38.7401 29.7248 36.7829 33.2599 33.2477C36.8073 29.7003 38.7523 24.9908 38.7523 19.9878C38.7523 14.9725 36.7951 10.263 33.2599 6.72783C29.7248 3.19266 25.0153 1.23547 20 1.23547Z" fill="#066FDE"></path><path d="M39.3879 20.6848C37.8588 20.6848 35.8282 19.7185 33.6753 18.7032C31.7793 17.8102 29.8221 16.8806 28.6233 16.8806C27.7181 16.8806 26.079 17.8469 24.6356 18.691C22.8986 19.7062 21.2594 20.6726 20.0239 20.6726C18.5805 20.6726 16.6356 19.7185 14.5683 18.7154C12.7212 17.8102 10.8129 16.8806 9.6631 16.8806C8.66004 16.8806 6.83741 17.8958 5.21049 18.7888C3.44903 19.7674 1.77318 20.6848 0.635569 20.6848C0.293061 20.6848 0.0117188 20.4035 0.0117188 20.061C0.0117188 19.7185 0.293061 19.4371 0.635569 19.4371C1.45514 19.4371 3.13098 18.5075 4.6111 17.7001C6.53159 16.6481 8.342 15.6451 9.6631 15.6451C11.1065 15.6451 13.0515 16.5992 15.1188 17.6023C16.9658 18.5075 18.8741 19.4371 20.0239 19.4371C20.9291 19.4371 22.5683 18.4708 24.0117 17.6267C25.7487 16.6114 27.3879 15.6451 28.6233 15.6451C30.1035 15.6451 32.0973 16.587 34.2135 17.59C36.1463 18.5075 38.1524 19.4494 39.4001 19.4494C39.7426 19.4494 40.0239 19.7307 40.0239 20.0732C39.9995 20.4157 39.7304 20.6848 39.3879 20.6848Z" fill="#066FDE"></path><path d="M38.1281 13.4801C36.5745 13.4801 34.7642 12.4648 33.0027 11.4862C31.4247 10.6055 29.7856 9.68807 28.6112 9.68807C27.706 9.68807 26.0669 10.6544 24.6235 11.4985C22.8865 12.5138 21.2473 13.4801 20.0119 13.4801C18.5684 13.4801 16.6235 12.526 14.5562 11.5229C12.7091 10.6177 10.8008 9.68807 9.651 9.68807C8.68464 9.68807 7.24121 10.6789 5.95681 11.5596C4.51338 12.5505 3.15558 13.4924 1.98127 13.4924C1.63876 13.4924 1.35742 13.211 1.35742 12.8685C1.35742 12.526 1.63876 12.2447 1.98127 12.2447C2.76415 12.2447 4.03632 11.3761 5.25957 10.5321C6.75192 9.50459 8.2932 8.44037 9.651 8.44037C11.0944 8.44037 13.0394 9.3945 15.1067 10.3976C16.9538 11.3028 18.862 12.2324 20.0119 12.2324C20.9171 12.2324 22.5562 11.2661 23.9996 10.422C25.7366 9.40673 27.3758 8.44037 28.6112 8.44037C30.1158 8.44037 31.8161 9.3945 33.6143 10.3976C35.229 11.3028 36.9048 12.2324 38.1281 12.2324C38.4706 12.2324 38.7519 12.5138 38.7519 12.8563C38.7519 13.211 38.4706 13.4801 38.1281 13.4801Z" fill="#066FDE"></path><path d="M38.1281 27.8285C36.5745 27.8285 34.7642 26.8133 33.0027 25.8347C31.4247 24.9539 29.7856 24.0365 28.6112 24.0365C27.706 24.0365 26.0669 25.0029 24.6235 25.8469C22.8865 26.8622 21.2473 27.8285 20.0119 27.8285C18.5684 27.8285 16.6235 26.8744 14.5562 25.8714C12.7091 24.9662 10.8008 24.0365 9.651 24.0365C8.68464 24.0365 7.24121 25.0273 5.95681 25.9081C4.51338 26.8989 3.15558 27.8408 1.98127 27.8408C1.63876 27.8408 1.35742 27.5594 1.35742 27.2169C1.35742 26.8744 1.63876 26.5931 1.98127 26.5931C2.76415 26.5931 4.03632 25.7246 5.25957 24.8805C6.75192 23.853 8.2932 22.7888 9.651 22.7888C11.0944 22.7888 13.0394 23.7429 15.1067 24.746C16.9538 25.6512 18.862 26.5808 20.0119 26.5808C20.9171 26.5808 22.5562 25.6145 23.9996 24.7704C25.7366 23.7552 27.3758 22.7888 28.6112 22.7888C30.1158 22.7888 31.8161 23.7429 33.6143 24.746C35.229 25.6512 36.9048 26.5808 38.1281 26.5808C38.4706 26.5808 38.7519 26.8622 38.7519 27.2047C38.7519 27.5472 38.4706 27.8285 38.1281 27.8285Z" fill="#066FDE"></path><path d="M20.0013 35.8043C18.5579 35.8043 16.613 34.8501 14.5457 33.8471C12.6986 32.9419 10.7903 32.0122 9.64048 32.0122C8.67412 32.0122 6.86372 33.003 5.89736 33.529C5.59155 33.688 5.22458 33.578 5.05332 33.2844C4.8943 32.9786 5.0044 32.6116 5.29797 32.4403C7.18176 31.4128 8.56402 30.7767 9.62824 30.7767C11.0717 30.7767 13.0166 31.7309 15.0839 32.7339C16.931 33.6391 18.8393 34.5688 19.9891 34.5688C20.8943 34.5688 22.5334 33.6024 23.9769 32.7584C25.7139 31.7431 27.353 30.7767 28.5885 30.7767C30.0686 30.7767 32.0625 31.7186 34.1787 32.7217L34.2154 32.7462C34.5212 32.8929 34.6558 33.2599 34.509 33.5657C34.3622 33.8715 33.9952 34.0061 33.6894 33.8593L33.6527 33.8348C31.7567 32.9419 29.7995 32.0122 28.6007 32.0122C27.6955 32.0122 26.0564 32.9786 24.613 33.8226C22.8882 34.8379 21.249 35.8043 20.0013 35.8043Z" fill="#066FDE"></path></svg>',
    },
    {
      name: "Fire",
      svg: '<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="19.9339" cy="19.9591" r="19.5198" fill="white"></circle><path d="M22.9126 39.8166C22.8759 39.8166 22.8392 39.8166 22.8148 39.8043C22.6191 39.7676 17.8362 38.997 13.1879 36.0001C10.4356 34.2264 8.31937 32.049 6.87594 29.5047C5.07778 26.3365 4.36829 22.6178 4.7475 18.471C4.77196 18.153 5.02885 17.9083 5.33466 17.8716C5.6527 17.8349 5.94628 18.0429 6.0319 18.3365C6.80255 20.9297 8.35606 23.0949 9.616 24.5383C9.39582 23.7432 9.18787 22.8013 9.05331 21.7982C8.50285 17.7004 9.44475 14.3365 11.7689 12.049C13.5548 10.2998 15.3408 9.22331 16.9188 8.26918C18.46 7.33952 19.671 6.60557 20.2949 5.59028C20.9555 4.51383 20.9188 3.11933 20.197 1.05205C20.0992 0.758476 20.2093 0.428198 20.4784 0.269177C20.7475 0.110155 21.09 0.159088 21.298 0.379272C23.7322 2.98478 24.564 5.68814 23.8545 8.66062C23.2307 11.2539 21.5671 13.7004 19.7934 16.3059C17.6894 19.4007 15.512 22.5933 15.0961 26.1407C14.8392 28.2936 15.5732 31.0215 17.0411 33.4557C18.6068 36.049 20.7964 37.8839 23.0472 38.4955C23.3408 38.5566 23.561 38.8258 23.561 39.1316C23.561 39.4863 23.2918 39.7677 22.9371 39.7921C22.9493 39.8166 22.9249 39.8166 22.9126 39.8166ZM5.99521 21.6637C6.12976 24.3181 6.81478 26.7401 8.02579 28.8686C9.35912 31.2172 11.3285 33.2478 13.9096 34.8992C15.3897 35.8533 16.8943 36.575 18.2399 37.101C17.3958 36.2692 16.6129 35.2784 15.9279 34.153C14.3132 31.4741 13.5181 28.4282 13.7995 26.0062C14.2521 22.1407 16.5273 18.8013 18.7169 15.5719C20.4172 13.0765 22.0197 10.7157 22.5824 8.36704C22.9738 6.72789 22.8148 5.19884 22.0808 3.71872C22.1298 6.67896 20.0625 7.92667 17.5915 9.40679C16.0747 10.3242 14.3499 11.3517 12.6863 12.9909C10.6435 14.997 9.86065 17.8839 10.3499 21.5903C10.7292 24.4282 11.7444 26.6912 11.7567 26.7157C11.879 26.997 11.8056 27.3273 11.561 27.5108C11.3163 27.6943 10.986 27.6943 10.7414 27.5108C10.6191 27.4129 7.879 25.1866 5.99521 21.6637Z" fill="#066FDE"></path><path d="M24.2577 34.1285C20.8694 34.1285 19.1324 32.5383 18.2761 31.1927C17.6033 30.153 17.2119 28.8808 17.1629 27.5108C17.114 26.2631 17.3342 25.0154 17.8112 23.9878C18.3495 22.8135 19.377 21.5414 20.5635 20.0735C23.695 16.1958 27.5972 11.364 24.588 5.57806C24.4412 5.29672 24.5268 4.96644 24.7837 4.78296C25.0406 4.59947 25.3831 4.63617 25.5911 4.86858C29.4198 9.0276 30.6186 13.3456 30.9366 16.2325C31.3036 19.5352 30.7164 22.7401 29.3097 25.1866C30.8632 25.0765 32.2333 23.9634 33.1262 23.0215C34.1905 21.9083 34.8265 20.783 34.8265 20.7707C34.9733 20.5261 35.2669 20.4037 35.536 20.4771C35.8174 20.5628 36.0009 20.8196 35.9764 21.101C35.9764 21.2111 35.8174 23.9022 34.6064 26.8258C32.9794 30.7646 30.2149 33.2111 26.5941 33.8839C25.7746 34.0429 24.9917 34.1285 24.2577 34.1285ZM26.8021 8.45268C27.4993 13.4313 24.1109 17.627 21.5054 20.8563C20.3678 22.2631 19.3892 23.4741 18.9244 24.5016C18.2272 26.0307 18.0559 28.5628 19.3158 30.52C20.3067 32.0735 22.0192 32.8808 24.2577 32.8808C24.9183 32.8808 25.6278 32.8074 26.3739 32.6729C29.6033 32.0735 31.9886 29.945 33.4687 26.3609C33.8846 25.3456 34.1782 24.3426 34.3617 23.4863C33.1385 24.8686 31.2791 26.4221 29.0406 26.4221C28.7226 26.4221 28.4045 26.3854 28.0987 26.3242C27.8908 26.2875 27.7195 26.1408 27.6461 25.945C27.5727 25.7493 27.5972 25.5291 27.7195 25.3579C29.3709 23.0704 30.0926 19.7921 29.7012 16.3548C29.4565 14.2998 28.747 11.4374 26.8021 8.45268Z" fill="#066FDE"></path><path d="M20 40C14.6544 40 9.63914 37.9205 5.85933 34.1407C2.07951 30.3609 0 25.3456 0 20C0 14.6544 2.07951 9.63915 5.85933 5.85933C9.63914 2.07951 14.6544 0 20 0C25.3456 0 30.3609 2.07951 34.1407 5.85933C37.9205 9.63915 39.9878 14.6667 39.9878 20C39.9878 25.3456 37.9083 30.3609 34.1284 34.1407C30.3609 37.9205 25.3333 40 20 40ZM20 1.24771C14.9847 1.24771 10.2752 3.2049 6.74006 6.74007C3.19266 10.2875 1.24771 14.9969 1.24771 20C1.24771 25.0153 3.20489 29.7248 6.74006 33.2599C10.2875 36.8073 14.9969 38.7523 20 38.7523C25.0153 38.7523 29.7248 36.7951 33.2599 33.2599C36.8073 29.7125 38.7523 25.0031 38.7523 20C38.7523 14.9847 36.7951 10.2752 33.2599 6.74007C29.7125 3.19267 25.0031 1.24771 20 1.24771Z" fill="#066FDE"></path></svg>',
    },
    {
      name: "Air",
      svg: '<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="19.9396" cy="20.0349" r="19.5138" fill="white"></circle><path d="M36.8083 9.15946C36.0501 7.98551 35.1574 6.8727 34.1302 5.85772C33.8368 5.56423 33.5433 5.28297 33.2375 5.01394C29.5812 1.77334 24.922 0.000183105 19.9939 0.000183105C14.65 0.000183105 9.6362 2.07906 5.85754 5.85772C2.07887 9.63638 0 14.6501 0 19.9941C0 25.338 2.07887 30.3518 5.85754 34.1304C9.6362 37.9091 14.65 39.988 19.9939 39.988C25.3378 39.988 30.3516 37.9091 34.1302 34.1304C37.9089 30.3518 39.9878 25.3258 39.9878 19.9941C39.9878 16.0931 38.8872 12.3634 36.8083 9.15946ZM33.262 33.25C29.7157 36.7963 25.0076 38.7406 20.0061 38.7406C14.9924 38.7406 10.2843 36.784 6.75023 33.25C3.20391 29.7036 1.25955 24.9956 1.25955 19.9941C1.25955 14.9803 3.21614 10.2723 6.75023 6.73818C10.2965 3.19187 15.0046 1.24751 20.0061 1.24751C25.0199 1.24751 29.7279 3.2041 33.262 6.73818C33.3231 6.79933 33.3843 6.86047 33.4454 6.92161C34.2403 7.72871 34.9129 8.68254 35.402 9.67307C35.7689 10.3946 36.0501 11.0671 36.2091 11.862C36.6371 13.574 36.6983 15.4083 36.5271 17.3038C36.1847 21.2292 34.3259 24.7877 31.3054 27.3068C28.2849 29.8382 24.4574 31.0366 20.5319 30.6942C14.1241 30.1316 9.36717 24.4453 9.92968 18.0375C10.3821 12.9748 14.8578 9.23283 19.9205 9.67307C21.8526 9.84427 23.5891 10.7492 24.8364 12.2411C26.0715 13.7208 26.6707 15.604 26.4995 17.5239C26.365 19.028 25.6558 20.3976 24.494 21.3637C23.3323 22.3297 21.8649 22.7944 20.3607 22.6599C19.1868 22.5621 18.1351 21.9996 17.377 21.1069C16.6188 20.202 16.2641 19.0647 16.3742 17.8907C16.4476 16.9858 16.8756 16.1787 17.5726 15.5917C18.2696 15.0048 19.1501 14.7357 20.0428 14.8091C20.7276 14.8703 21.3513 15.1882 21.7915 15.7263C22.2317 16.2521 22.4396 16.9247 22.3907 17.6095C22.2929 18.6734 21.3513 19.456 20.2874 19.3704C19.9327 19.3337 19.6148 19.6028 19.5781 19.9574C19.5414 20.312 19.8105 20.63 20.1651 20.6544C21.9382 20.8134 23.5157 19.4927 23.6747 17.7195C23.7603 16.6923 23.4546 15.6773 22.782 14.8825C22.1217 14.0876 21.1801 13.5985 20.1529 13.5129C18.9055 13.4028 17.6949 13.7819 16.7288 14.589C15.7628 15.3961 15.1758 16.5211 15.0657 17.7685C14.9312 19.2848 15.3959 20.7645 16.3742 21.9262C17.3525 23.0879 18.7221 23.8094 20.2385 23.9439C22.085 24.1029 23.8948 23.5404 25.3134 22.3542C26.7441 21.1558 27.6124 19.4805 27.7836 17.6339C27.9792 15.3594 27.2944 13.146 25.827 11.3973C24.3595 9.64861 22.3051 8.57248 20.0306 8.37683C14.2586 7.86322 9.14705 12.1433 8.63345 17.9152C7.99756 25.0445 13.2926 31.3423 20.4097 31.9782C24.6775 32.3573 28.8474 31.0488 32.137 28.2973C35.4265 25.5459 37.4442 21.6816 37.8233 17.4138C37.9211 16.3377 37.9211 15.2738 37.8478 14.2221C38.4347 16.0564 38.7404 18.0008 38.7404 19.9818C38.7527 24.9956 36.8083 29.7036 33.262 33.25Z" fill="#066FDE"></path><path d="M20.0056 39.9998C14.6617 39.9998 9.64792 37.9209 5.86926 34.1423C2.09059 30.3636 0.0117188 25.3498 0.0117188 20.0059C0.0117188 14.662 2.09059 9.64822 5.86926 5.86956C9.64792 2.0909 14.6617 0.0120239 20.0056 0.0120239C25.3495 0.0120239 30.3633 2.0909 34.142 5.86956C37.9206 9.64822 39.9873 14.662 39.9873 20.0059C39.9873 25.3498 37.9084 30.3636 34.1297 34.1423C30.3511 37.9209 25.3373 39.9998 20.0056 39.9998ZM20.0056 1.24712C14.9918 1.24712 10.2838 3.20371 6.74972 6.7378C3.2034 10.2841 1.25904 14.9922 1.25904 19.9937C1.25904 25.0074 3.21563 29.7155 6.74972 33.2496C10.296 36.7959 15.0041 38.7402 20.0056 38.7402C25.0194 38.7402 29.7274 36.7837 33.2615 33.2496C36.8078 29.7032 38.7522 24.9952 38.7522 19.9937C38.7522 14.9799 36.7956 10.2719 33.2615 6.7378C29.7152 3.20371 25.0071 1.24712 20.0056 1.24712Z" fill="#066FDE"></path></svg>',
    },
  ];
  const [option, setOption] = useState("");
  const navigate = useNavigate();
  const select = (item) => {
    setOption(item);
    localStorage.setItem("resonate", item);
    navigate("/color");
  };
  const location = useLocation();
  useEffect(() => {
    localStorage.setItem("currentPage", location.pathname);
    const data = localStorage.getItem("resonate");
    if (data) {
      setOption(data);
    }
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="resonate">
      <p>Which element resonates with you the most?</p>
      <div className="options">
        {options.map((item, index) => (
          <button
            className={item.name === option && "active"}
            onClick={() => select(item.name)}
            key={index}>
            <div dangerouslySetInnerHTML={{ __html: item.svg }}></div>
            <span>{item.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Resonate;