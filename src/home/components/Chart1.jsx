import { REDDIT, SOLANA, TELEGRAM, TWITTER } from "@/assets";
import { MaterialSymbol } from "react-material-symbols";


import PLUS from '../../assets/chart-icons/bytesize_plus.svg';
import LINE from '../../assets/chart-icons/bytesize_plus-1.svg';
import HORIZONTALLINE from '../../assets/chart-icons/Frame 305.svg';
import CHARTDOTS from '../../assets/chart-icons/tabler_chart-dots-3.svg';
import FRAME306 from '../../assets/chart-icons/Frame 306.svg';
import BRUSHFILL from '../../assets/chart-icons/ri_brush-fill.svg';
import TEXT from '../../assets/chart-icons/mi_text.svg';
import SMILE from '../../assets/chart-icons/uil_smile.svg';
import SCALE from '../../assets/chart-icons/icon-park-outline_scale-one.svg';
import SEARCHPLUSLINE from '../../assets/chart-icons/majesticons_search-plus-line.svg';
import MAGNET from '../../assets/chart-icons/solar_magnet-bold.svg';
import PENCIL from '../../assets/chart-icons/mdi_pencil-plus-outline.svg';
import UNLOCK from '../../assets/chart-icons/si_unlock-fill.svg';
import EYE from '../../assets/chart-icons/tabler_eye.svg';
import TRASH from '../../assets/chart-icons/octicon_trash-16.svg';
import FLIPVIEW from '../../assets/chart-icons/system-uicons_flip-view.svg';
import EXPAND from '../../assets/chart-icons/mi_expand.svg';
import CHARTLINE from '../../assets/chart-icons/vaadin_chart-line.svg';
import CHART from '../../assets/chart-icons/vaadin_chart.svg';
import ARROWBACK from '../../assets/chart-icons/akar-icons_arrow-back.svg';
import ARROWRIGHT from '../../assets/chart-icons/akar-icons_arrow-back-1.svg';
import SEARCHAILINE from '../../assets/chart-icons/mingcute_search-ai-line.svg';

export default function Chart1() {
  return (
    <div className="w-full bg-white rounded-2xl p-4 overflow-hidden">
      <div className="w-full flex flex-wrap md:flex-nowrap gap-4 items-center justify-around border-b border-black pb-2">

        <div className="flex gap-4 items-center">
          <img src={SOLANA} className="w-8 h-8" />
          <div className="flex flex-col">
            <p className="text-base font-semibold text-[#232323]s">Harrypottero...</p>
            <p className="text-[11px] text-[#818077] font-medium">Solana / WETH</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <MaterialSymbol icon="star" size={20} />
          <MaterialSymbol icon="share" size={20} />
        </div>

        <div className="p-2 px-4 border border-black rounded-md">
          <p className="text-lg  text-[#232323] font-bold whitespace-nowrap">$ 0.2671</p>
        </div>

        <div className="rounded-full border flex items-center gap-4 border-black p-0.5 pr-4">
          <div className="w-full rounded-full flex items-center gap-1 bg-[#F6A823] p-2 px-3">
            <MaterialSymbol icon="gpp_maybe" size={20} />
            <p className="text-[11px] font-semibold uppercase">Audit: 3</p>
          </div>
          <img src={REDDIT} className="w-4 h-4" />
          <img src={TELEGRAM} className="w-4 h-4" />
          <img src={TWITTER} className="w-4 h-4" />
          |
          <p className="text-[11px] text-[#232323] font-medium whitespace-nowrap">HOT 7</p>
          <MaterialSymbol icon="bolt" color="#F6A823" fill />
        </div>

        <div className="flex flex-col">
          <div className="flex gap-2 justify-end">
            <p className="text-[13px] text-[#C61717] font-medium">-10.99%</p>
            <p className="text-[12px] text-[#232323] font-medium">24h</p>
          </div>
          <p className="text-[12px] text-[#232323] font-medium">0.0001020 SOL</p>


        </div>

      </div>

      <div className="relative w-full h-full bg-white flex flex-col-reverse md:flex-row items-start p-2">
        <div className="w-10 h-full bg-white flex flex-col items-center gap-2 p-2 cursor-pointer">
          <img src={PLUS} />
          <img src={LINE} />
          <img src={HORIZONTALLINE} />
          <img src={CHARTDOTS} />
          <img src={FRAME306} />
          <img src={BRUSHFILL} />
          <img src={TEXT} />
          <img src={SMILE} />
          <img src={SCALE} />
          <img src={SEARCHPLUSLINE} />
          <img src={MAGNET} />
          <img src={PENCIL} />
          <img src={UNLOCK} />
          <img src={EYE} />
          <img src={TRASH} />
          <img src={FLIPVIEW} />
        </div>

        <div className="w-full flex flex-col gap-2 p-2">

          <div className="w-full flex flex-wrap items-center gap-2 md:gap-4">
            <MaterialSymbol icon="candlestick_chart" fill />

            <div className="flex items-center gap-2">
              <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.33325 0.5C4.13978 0.5 2.99519 0.974106 2.15127 1.81802C1.30736 2.66193 0.833252 3.80653 0.833252 5V9C0.833252 10.1935 1.30736 11.3381 2.15127 12.182C2.99519 13.0259 4.13978 13.5 5.33325 13.5H10.6666C11.8601 13.5 13.0047 13.0259 13.8486 12.182C14.6925 11.3381 15.1666 10.1935 15.1666 9V5C15.1666 3.80653 14.6925 2.66193 13.8486 1.81802C13.0047 0.974106 11.8601 0.5 10.6666 0.5H5.33325ZM3.99992 4.5C3.86731 4.5 3.74013 4.55268 3.64636 4.64645C3.5526 4.74022 3.49992 4.86739 3.49992 5V9C3.49992 9.13261 3.5526 9.25979 3.64636 9.35355C3.74013 9.44732 3.86731 9.5 3.99992 9.5C4.13253 9.5 4.2597 9.44732 4.35347 9.35355C4.44724 9.25979 4.49992 9.13261 4.49992 9V7.5H6.38059C6.51319 7.5 6.64037 7.44732 6.73414 7.35355C6.82791 7.25979 6.88059 7.13261 6.88059 7C6.88059 6.86739 6.82791 6.74022 6.73414 6.64645C6.64037 6.55268 6.51319 6.5 6.38059 6.5H4.49992V5.5H7.33325C7.46586 5.5 7.59304 5.44732 7.6868 5.35355C7.78057 5.25979 7.83325 5.13261 7.83325 5C7.83325 4.86739 7.78057 4.74022 7.6868 4.64645C7.59304 4.55268 7.46586 4.5 7.33325 4.5H3.99992ZM9.05058 4.68C9.00914 4.62777 8.95768 4.58436 8.89921 4.55232C8.84075 4.52027 8.77646 4.50025 8.71014 4.49341C8.64382 4.48658 8.57681 4.49308 8.51304 4.51253C8.44927 4.53198 8.39003 4.56399 8.33881 4.60667C8.28759 4.64935 8.24543 4.70185 8.2148 4.76106C8.18417 4.82028 8.16569 4.88503 8.16045 4.95149C8.15521 5.01796 8.16332 5.0848 8.18429 5.14808C8.20527 5.21137 8.23869 5.26982 8.28258 5.32L9.68258 7L8.28258 8.68C8.23869 8.73018 8.20527 8.78863 8.18429 8.85192C8.16332 8.9152 8.15521 8.98204 8.16045 9.04851C8.16569 9.11497 8.18417 9.17972 8.2148 9.23894C8.24543 9.29815 8.28759 9.35065 8.33881 9.39333C8.39003 9.43601 8.44927 9.46802 8.51304 9.48747C8.57681 9.50692 8.64382 9.51342 8.71014 9.50659C8.77646 9.49975 8.84075 9.47973 8.89921 9.44768C8.95768 9.41564 9.00914 9.37223 9.05058 9.32L10.3333 7.78133L11.6159 9.32C11.6574 9.37223 11.7088 9.41564 11.7673 9.44768C11.8258 9.47973 11.89 9.49975 11.9564 9.50659C12.0227 9.51342 12.0897 9.50692 12.1535 9.48747C12.2172 9.46802 12.2765 9.43601 12.3277 9.39333C12.3789 9.35065 12.4211 9.29815 12.4517 9.23894C12.4823 9.17972 12.5008 9.11497 12.5061 9.04851C12.5113 8.98204 12.5032 8.9152 12.4822 8.85192C12.4612 8.78863 12.4278 8.73018 12.3839 8.68L10.9839 7L12.3839 5.32C12.4278 5.26982 12.4612 5.21137 12.4822 5.14808C12.5032 5.0848 12.5113 5.01796 12.5061 4.95149C12.5008 4.88503 12.4823 4.82028 12.4517 4.76106C12.4211 4.70185 12.3789 4.64935 12.3277 4.60667C12.2765 4.56399 12.2172 4.53198 12.1535 4.51253C12.0897 4.49308 12.0227 4.48658 11.9564 4.49341C11.89 4.50025 11.8258 4.52027 11.7673 4.55232C11.7088 4.58436 11.6574 4.62777 11.6159 4.68L10.3333 6.21933L9.05058 4.68Z" fill="#232323" />
              </svg>
              <p className="text-[8px] font-medium text-[#232323]">Indicators</p>
            </div>
            <p className="text-[8px] font-medium text-[#232323]">PRICE/MCAP</p>
            <p className="text-[8px] font-medium text-[#232323]">DEXT/ETH</p>
            <p className="text-[8px] font-medium text-[#232323]">Max: $0.7006</p>
            <p className="text-[8px] font-medium text-[#232323]">Min: $0.8414</p>
            <div className="flex items-center gap-4 cursor-pointer">
              <img src={EXPAND} />
              <img src={CHART} />
              <img src={CHARTLINE} />
              <img src={ARROWBACK} />
              <img src={ARROWRIGHT} />
            </div>

          </div>

          <div className="w-full flex flex-wrap items-center justify-between">
            <div className="flex flex-wrap gap-2 items-center">
              <p className="text-[10px] text-[#232323] font-medium">DEXT/USD  -  UNI  15  DEXTools.oi</p>
              <p className="text-[8px] font-medium">O<span className="text-[#C61717]">0.6684</span></p>
              <p className="text-[8px] font-medium">H<span className="text-[#C61717]">0.6684</span></p>
              <p className="text-[8px] font-medium">L<span className="text-[#C61717]">0.6684</span></p>
              <p className="text-[8px] font-medium">C<span className="text-[#C61717]">0.6684 -0.000561651  (-0.56%)</span></p>
            </div>
            <div className="flex gap-2 items-center ml-auto cursor-pointer">
              <img src={SEARCHAILINE} className="w-5 h-5" />
              <MaterialSymbol icon="settings" size={20} />
              <MaterialSymbol icon="camera_alt" size={20} />

            </div>
          </div>

        </div>
      </div>

    </div>
  )
}