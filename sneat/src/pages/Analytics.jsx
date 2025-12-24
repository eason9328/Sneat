import React, { useRef, useState, useEffect } from 'react'
import * as echarts from "echarts"
import axios from 'axios'
import Header from '../pages/Header'
import img01 from "../imgs/analytics/1.png"
import img02 from "../imgs/analytics/2.png"
import img03 from "../imgs/analytics/3.png"
import img04 from "../imgs/analytics/4.png"
import img05 from "../imgs/analytics/5.png"
import '../css/analytics.css';

export default function Analytics() {
  const saleRef = useRef(null);
  const [shown, setShown] = useState(false)
  const [isOpen, setIsOpen] = useState(false);
  const [shown1, setShown1] = useState(false);
  const [shown2, setShown2] = useState(false);
  const yearRef = useRef(null);
  const payRef = useRef(null);
  const orderRef = useRef(null);
  const years = [2025, 2024, 2023, 2022];
  const [selectedCategory, setSelectedCategory] = useState("INCOME");
  const categories = ["INCOME", "EXPENSES", "PROFIT"];
  const Click = (category) => {
    setSelectedCategory(category);
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (yearRef.current && !yearRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSelectYear = (year) => {
    setSelectedYear(year);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (saleRef.current && !saleRef.current.contains(event.target)) {
        setShown(false);
      }
    };
    const handleClickOutside1 = (event) => {
      if (payRef.current && !payRef.current.contains(event.target)) {
        setShown1(false);
      }
    };
    const handleClickOutside2 = (event) => {
      if (orderRef.current && !orderRef.current.contains(event.target)) {
        setShown2(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('mousedown', handleClickOutside1);
    document.addEventListener('mousedown', handleClickOutside2);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('mousedown', handleClickOutside1);
      document.removeEventListener('mousedown', handleClickOutside2);
    };
  }, []);

  const handleClick = () => {
    setShown(!shown)
  }
  const handleClick1 = () => {
    setShown1(!shown1)
  }
  const handleClick2 = () => {
    setShown2(!shown2)
  }
  const [selectedYear, setSelectedYear] = useState(2025);
  const [chartData, setChartData] = useState({ current: [], previous: [], currentprofit: [], previousprofit: [], currentincome: [], currentexpense: [] });
  const chartRef = useRef(null)
  const myChartRef = useRef(null);
  const chart1Ref = useRef(null);
  const chart2Ref = useRef(null);
  const myChart1Ref = useRef(null);
  const gaugeRef = useRef(null);
  const myGaugeRef = useRef(null);
  const incomeRef = useRef(null);
  const myIncomeRef = useRef(null);
  const expenseRef = useRef(null);
  const myExpenseRef = useRef(null);
  const profitRef = useRef(null);
  const myProfitRef = useRef(null);
  const [totals, setTotals] = useState({ current: 0, previous: 0, currentprofit: 0, currentincome: 0, currentexpense: 0 });
  const [displayRate, setDisplayRate] = useState({ revenueRate: 0, profitRate: 0, incomeRate: 0, expenseRate: 0 });

  const getData = async (year) => {
    try {
      const res = await axios.get('http://127.0.0.1/getDataByYear', {
        params: { Year: selectedYear }
      });
      const data = res.data;
      const currentYearData = data.find(item => item.Year === year);
      const previousYearData = data.find(item => item.Year === year - 1);

      const current = currentYearData?.Revenue || [];
      const previous = previousYearData?.Revenue || [];
      const currentprofit = currentYearData?.Profit || [];
      const previousprofit = previousYearData?.Profit || [];
      const currentincome = currentYearData?.Income || [];
      const previousincome = previousYearData?.Income || [];
      const currentexpense = currentYearData?.Expense || [];
      const previousexpense = previousYearData?.Expense || [];
      const totalCurrent = current.reduce((sum, val) => sum + val, 0);
      const totalPrevious = previous.reduce((sum, val) => sum + val, 0);
      const totalcurrentProfit = currentprofit.reduce((sum, val) => sum + val, 0);
      const totalpreviousProfit = previousprofit.reduce((sum, val) => sum + val, 0);
      const totalcurrentIncome = currentincome.reduce((sum, val) => sum + val, 0);
      const totalpreviousIncome = previousincome.reduce((sum, val) => sum + val, 0);
      const totalcurrentExpense = currentexpense.reduce((sum, val) => sum + val, 0);
      const totalpreviousExpense = previousexpense.reduce((sum, val) => sum + val, 0);
      setTotals({
        current: totalCurrent,
        previous: totalPrevious,
        currentprofit: totalcurrentProfit,
        currentincome: totalcurrentIncome,
        currentexpense: totalcurrentExpense,
      });

      const revenuegrowthRate = Math.round(((totalCurrent - totalPrevious) / totalPrevious) * 100);
      const profitgrowthRate = Math.round(((totalcurrentProfit - totalpreviousProfit) / totalpreviousProfit) * 100);
      const incomegrowthRate = Math.round(((totalcurrentIncome - totalpreviousIncome) / totalpreviousIncome) * 100);
      const expensegrowthRate = Math.round(((totalcurrentExpense - totalpreviousExpense) / totalpreviousExpense) * 100);

      setDisplayRate({
        revenueRate: revenuegrowthRate,
        profitRate: profitgrowthRate,
        incomeRate: incomegrowthRate,
        expenseRate: expensegrowthRate,
      });

      setChartData({ current, previous, currentprofit, previousprofit, currentincome, currentexpense });
    } catch (err) {
      console.error('获取数据失败:', err.message);
    }
  };

  const initChart = (data) => {
    const chartDom = chartRef.current;
    const chart1Dom = chart1Ref.current;
    const gaugeDom = gaugeRef.current;
    const incomeDom = incomeRef.current;
    const expenseDom = expenseRef.current;
    const profitDom = profitRef.current;

    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'];

    if (chartDom) {
      if (myChartRef.current) {
        myChartRef.current.dispose();
      }
      myChartRef.current = echarts.init(chartDom);

      const option = {
        tooltip: {
          trigger: 'axis',
          extraCssText: 'width: 120px;'
        },
        legend: {
          data: [`${selectedYear}`, `${selectedYear - 1}`],
          top: 0,
          left: -5,
        },
        grid: {
          left: '0',
          right: '10',
          top: '50',
          bottom: '20',
          containLabel: true
        },
        xAxis: {
          type: 'category',
          data: months,
          axisLabel: { color: '#b1b9c1' },
          axisLine: { show: false },
        },
        yAxis: {
          type: 'value',
          axisLabel: { color: '#b1b9c1' },
          splitLine: { lineStyle: { color: '#e6e9eb' } },
        },
        series: [
          {
            name: `${selectedYear}`,
            type: 'bar',
            data: data.current,
            itemStyle: { color: '#686bfe', borderRadius: [8, 8, 8, 8] },
            barWidth: 14,
          },
          {
            name: `${selectedYear - 1}`,
            type: 'bar',
            data: data.previous,
            itemStyle: { color: '#03c3ec', borderRadius: [8, 8, 8, 8] },
            barWidth: 14,
            barGap: '30%',
          },
        ],
      };
      myChartRef.current.setOption(option);
    }
    if (chart1Dom) {
      if (myChart1Ref.current) {
        myChart1Ref.current.dispose();
      }
      myChart1Ref.current = echarts.init(chart1Dom);

      const option1 = {
        backgroundColor: 'transparent',
        xAxis: {
          type: 'category',
          data: months,
          show: false
        },
        yAxis: {
          type: 'value',
          show: false
        },
        grid: {
          left: 0,
          right: 0,
          top: 30,
          bottom: 0
        },
        series: [
          {
            data: data.currentprofit,
            type: 'line',
            smooth: true,
            symbol: 'none',
            lineStyle: {
              color: '#ffab00',
              width: 3,
              shadowColor: 'rgba(255, 171, 0, 0.6)',
              shadowBlur: 10,
              shadowOffsetY: 8
            },
            areaStyle: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  { offset: 0, color: 'rgba(255, 171, 0, 0.4)' },
                  { offset: 0.3, color: 'rgba(255, 255, 255, 1)' },
                  { offset: 1, color: 'rgba(255, 255, 255, 1)' }
                ]
              }
            },
          }
        ]
      };
      myChart1Ref.current.setOption(option1);
    }
    if (gaugeDom) {
      if (myGaugeRef.current) {
        myGaugeRef.current.dispose();
      }
      myGaugeRef.current = echarts.init(gaugeDom);

      const gaugeOption = {
        series: [
          {
            type: 'gauge',
            startAngle: 180,
            endAngle: 0,
            min: -100,
            max: 100,
            splitNumber: 10,
            radius: '120%',
            center: ['50%', '70%'],
            axisLine: {
              lineStyle: {
                width: 16,
                color: [
                  [Math.abs(displayRate.revenueRate) / 100, displayRate.revenueRate >= 0 ? '#696cff' : '#ff4d4f'],
                  [1, '#e0e7ff']
                ]
              }
            },
            pointer: { show: false },
            axisTick: { show: false },
            splitLine: { show: false },
            axisLabel: { show: false },
            detail: {
              formatter: `${displayRate.revenueRate >= 0 ? '+' : ''}{value}%`,
              fontSize: 24,
              fontWeight: 'bold',
              color: displayRate.revenueRate >= 0 ? '#696cff' : '#ff4d4f',
              offsetCenter: [0, '-25%']
            },
            title: {
              offsetCenter: [0, '10%'],
              fontSize: 16,
              color: '#86909c'
            },
            data: [
              {
                value: displayRate.revenueRate,
                name: 'Growth'
              }
            ]
          }
        ]
      };
      myGaugeRef.current.setOption(gaugeOption);
    }

    if (incomeDom) {
      if (myIncomeRef.current) {
        myIncomeRef.current.dispose();
      }
      myIncomeRef.current = echarts.init(incomeDom);

      const option2 = {
        backgroundColor: 'transparent',
        tooltip: {
          trigger: 'axis',
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          borderColor: '#e5e7eb',
          textStyle: { color: '#333' }
        },
        xAxis: {
          type: 'category',
          data: months,
          boundaryGap: false,
          axisLine: { show: false },
          axisTick: { show: false },
          axisLabel: {
            color: '#b1b9c1',
            fontSize: 12,
            margin: 15
          }
        },
        yAxis: {
          type: 'value',
          axisLabel: { show: false },
          axisLine: { show: false },
          axisTick: { show: false },
          splitLine: {
            show: true,
            lineStyle: {
              color: '#e6e9eb',
              width: 1,
              type: [3, 5],
              cap: 'round'
            }
          }
        },
        grid: {
          left: '3%',
          right: '3%',
          top: '15%',
          bottom: '10%',
          containLabel: false
        },
        series: [
          {
            data: data.currentincome,
            type: 'line',
            smooth: true,
            symbol: 'circle',
            symbolSize: 0,
            markPoint: {
              symbol: 'circle',
              symbolSize: 12,
              itemStyle: {
                color: '#fff',
                borderColor: '#696cff',
                borderWidth: 3
              },
              data: [{ type: 'max', name: '最大值' }],
              label: { show: false }
            },
            lineStyle: {
              color: '#696cff',
              width: 3
            },
            areaStyle: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  { offset: 0, color: 'rgba(105, 108, 255, 0.3)' },
                  { offset: 0.5, color: 'rgba(105, 108, 255, 0.1)' },
                  { offset: 1, color: 'rgba(105, 108, 255, 0)' }
                ]
              }
            }
          }
        ]
      };
      myIncomeRef.current.setOption(option2);
    }

    if (expenseDom) {
      if (myExpenseRef.current) {
        myExpenseRef.current.dispose();
      }
      myExpenseRef.current = echarts.init(expenseDom);

      const option3 = {
        backgroundColor: 'transparent',
        tooltip: {
          trigger: 'axis',
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          borderColor: '#e5e7eb',
          textStyle: { color: '#333' }
        },
        xAxis: {
          type: 'category',
          data: months,
          boundaryGap: false,
          axisLine: { show: false },
          axisTick: { show: false },
          axisLabel: {
            color: '#b1b9c1',
            fontSize: 12,
            margin: 15
          }
        },
        yAxis: {
          type: 'value',
          axisLabel: { show: false },
          axisLine: { show: false },
          axisTick: { show: false },
          splitLine: {
            show: true,
            lineStyle: {
              color: '#e6e9eb',
              width: 1,
              type: [3, 5],
              cap: 'round'
            }
          }
        },
        grid: {
          left: '3%',
          right: '3%',
          top: '15%',
          bottom: '10%',
          containLabel: false
        },
        series: [
          {
            data: data.currentexpense,
            type: 'line',
            smooth: true,
            symbol: 'circle',
            symbolSize: 0,
            markPoint: {
              symbol: 'circle',
              symbolSize: 12,
              itemStyle: {
                color: '#fff',
                borderColor: '#696cff',
                borderWidth: 3
              },
              data: [{ type: 'max', name: '最大值' }],
              label: { show: false }
            },
            lineStyle: {
              color: '#696cff',
              width: 3
            },
            areaStyle: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  { offset: 0, color: 'rgba(105, 108, 255, 0.3)' },
                  { offset: 0.5, color: 'rgba(105, 108, 255, 0.1)' },
                  { offset: 1, color: 'rgba(105, 108, 255, 0)' }
                ]
              }
            }
          }
        ]
      };
      myExpenseRef.current.setOption(option3);
    }
    if (profitDom) {
      if (myProfitRef.current) {
        myProfitRef.current.dispose();
      }
      myProfitRef.current = echarts.init(profitDom);

      const option4 = {
        backgroundColor: 'transparent',
        tooltip: {
          trigger: 'axis',
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          borderColor: '#e5e7eb',
          textStyle: { color: '#333' }
        },
        xAxis: {
          type: 'category',
          data: months,
          boundaryGap: false,
          axisLine: { show: false },
          axisTick: { show: false },
          axisLabel: {
            color: '#b1b9c1',
            fontSize: 12,
            margin: 15
          }
        },
        yAxis: {
          type: 'value',
          axisLabel: { show: false },
          axisLine: { show: false },
          axisTick: { show: false },
          splitLine: {
            show: true,
            lineStyle: {
              color: '#e6e9eb',
              width: 1,
              type: [3, 5],
              cap: 'round'
            }
          }
        },
        grid: {
          left: '3%',
          right: '3%',
          top: '15%',
          bottom: '10%',
          containLabel: false
        },
        series: [
          {
            data: data.currentprofit,
            type: 'line',
            smooth: true,
            symbol: 'circle',
            symbolSize: 0,
            markPoint: {
              symbol: 'circle',
              symbolSize: 12,
              itemStyle: {
                color: '#fff',
                borderColor: '#696cff',
                borderWidth: 3
              },
              data: [{ type: 'max', name: '最大值' }],
              label: { show: false }
            },
            lineStyle: {
              color: '#696cff',
              width: 3
            },
            areaStyle: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  { offset: 0, color: 'rgba(105, 108, 255, 0.3)' },
                  { offset: 0.5, color: 'rgba(105, 108, 255, 0.1)' },
                  { offset: 1, color: 'rgba(105, 108, 255, 0)' }
                ]
              }
            }
          }
        ]
      };
      myProfitRef.current.setOption(option4);
    }
  };

  useEffect(() => {
    getData(selectedYear);
  }, [selectedYear]);

  useEffect(() => {
    if (chartData.current.length > 0 || chartData.previous.length > 0) {
      initChart(chartData);
    }
  }, [chartData, selectedYear, selectedCategory]);

  useEffect(() => {
    return () => {
      if (myChartRef.current) {
        myChartRef.current.dispose();
      };
      if (myGaugeRef.current) {
        myGaugeRef.current.dispose();
      }
    };

  }, []);

  const weekRef = useRef(null);

  useEffect(() => {
    const chart = echarts.init(weekRef.current);
    const chart1 = echarts.init(chart2Ref.current);


    const option = {
      tooltip: { show: false },
      grid: {
        left: 0,
        right: 0,
        top: 30,
        bottom: 0,
        containLabel: true,
      },
      xAxis: {
        type: 'category',
        data: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
        axisLine: { show: false },
        axisTick: { show: false },
        axisLabel: {
          color: '#aaa',
          fontSize: 12,
          margin: 12,
        },
      },
      yAxis: {
        type: 'value',
        show: false,
      },
      series: [
        {
          type: 'bar',
          data: [3, 4, 3, 7, 4, 3, 2],
          itemStyle: {
            color: (params) => {
              return params.dataIndex === 3 ? '#696cff' : '#e0d9ff';
            },
            borderRadius: [2, 2, 0, 0],
          },
          barWidth: '80%',

        },
      ],
    };
    const option1 = {
      title: {
        text: '38%',
        subtext: 'Weekly',
        left: 'center',
        top: '27%',
        textStyle: {
          fontSize: 32,
          color: '#32475cde',
          fontWeight: 'normal'
        },
        subtextStyle: {
          fontSize: 18,
          color: '#32475c99',
          fontWeight: 'normal'
        }
      },
      tooltip: {
        trigger: 'item'
      },
      legend: {
        top: '5%',
        left: 'center'
      },
      series: [
        {
          name: 'Access From',
          type: 'pie',
          radius: ['80%', '100%'],
          avoidLabelOverlap: false,
          itemStyle: {
            borderRadius: 10,
            borderColor: '#fff',
            borderWidth: 2
          },
          label: {
            show: false,
            position: 'center'
          },
          emphasis: {
            label: {
              show: true,
              fontSize: 40,
              fontWeight: 'bold'
            }
          },
          labelLine: {
            show: false
          },
          data: [
            { value: 1048 },
            { value: 735 },
            { value: 580 },
            { value: 484 },
            { value: 300 }
          ]
        }
      ]
    };
    chart.setOption(option);
    chart1.setOption(option1);
  }, []);

  return (
    <div className="ana">
      <div class="top-blur"></div>
      <div className="container">
        <div className="s1"><Header /></div>
        <div className="content">
          <div className="s2">
            <div className="s21">
              <div className="s211">
                <h1>Congratulations John! 🎉</h1>
                <p>You have done 72% more sales today.<br />Check your new badge in your profile.</p>
                <button>VIEW BADGES</button>
              </div>
              <img src={img01} alt="" />
            </div>
            <div className="s2111">
              <div className="s22">
                <div>Order
                  <span>276K</span>
                </div>
                <svg
                  id="SvgjsSvg7756"
                  width="125%"
                  height="65%"
                  viewBox="0 0 138 110"
                  preserveAspectRatio="none"
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  className="apexcharts-svg"
                  style={{ background: 'transparent' }}
                >
                  <g id="SvgjsG7758" className="apexcharts-inner apexcharts-graphical" transform="translate(0, 5)">
                    <defs id="SvgjsDefs7757">
                      <clipPath id="gridRectMasktoiwhwma">
                        <rect
                          id="SvgjsRect7763"
                          width="128"
                          height="93"
                          x="-3.5"
                          y="-1.5"
                          rx="0"
                          ry="0"
                          opacity="1"
                          strokeWidth="0"
                          stroke="none"
                          strokeDasharray="0"
                          fill="#fff"
                        />
                      </clipPath>
                      <linearGradient id="SvgjsLinearGradient7780" x1="0" y1="0" x2="0" y2="1">
                        <stop id="SvgjsStop7781" stopOpacity="0.6" stopColor="#71dd37" offset="0" />
                        <stop id="SvgjsStop7782" stopOpacity="0.1" stopColor="#ffffff" offset="1" />
                      </linearGradient>
                    </defs>
                    <g id="SvgjsG7765" className="apexcharts-area-series">
                      <g id="SvgjsG7766" className="apexcharts-series">
                        <path
                          id="SvgjsPath7783"
                          d="M 0 90L 0 75C 8.47 75 15.73 15 24.2 15C 32.67 15 39.93 67.5 48.4 67.5C 56.87 67.5 64.13 37.5 72.6 37.5C 81.07 37.5 88.33 52.5 96.8 52.5C 105.27 52.5 112.53 15 121 15C 121 15 121 15 121 90M 121 15z"
                          fill="url(#SvgjsLinearGradient7780)"
                          fillOpacity="1"
                          strokeOpacity="1"
                          strokeLinecap="round"
                          strokeWidth="0"
                          strokeDasharray="0"
                          className="apexcharts-area"
                          clipPath="url(#gridRectMasktoiwhwma)"
                        />
                        <path
                          id="SvgjsPath7784"
                          d="M 0 75C 8.47 75 15.73 15 24.2 15C 32.67 15 39.93 67.5 48.4 67.5C 56.87 67.5 64.13 37.5 72.6 37.5C 81.07 37.5 88.33 52.5 96.8 52.5C 105.27 52.5 112.53 15 121 15"
                          fill="none"
                          fillOpacity="1"
                          stroke="#71dd37"
                          strokeOpacity="1"
                          strokeLinecap="round"
                          strokeWidth="2"
                          strokeDasharray="0"
                          className="apexcharts-area"
                          clipPath="url(#gridRectMasktoiwhwma)"
                        />
                        <g className="apexcharts-series-markers-wrap">
                          <circle
                            r="5"
                            cx="121"
                            cy="16"
                            className="apexcharts-marker"
                            stroke="#71dd37"
                            fill="#ffffff"
                            fillOpacity="1"
                            strokeWidth="3"
                            strokeOpacity="1"
                          />
                        </g>
                      </g>
                    </g>
                  </g>
                </svg>
              </div>
              <div className="s23">
                <div>
                  <img src={img02} alt="" />
                  Sales
                  <span>$4,679</span>
                  <span><svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" font-size="16" class="iconify iconify--bx" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M11 8.414V18h2V8.414l4.293 4.293l1.414-1.414L12 4.586l-6.707 6.707l1.414 1.414z"></path></svg> 28.14%</span>
                </div>
                <div className="s231" ref={saleRef} onClick={handleClick}>
                  <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" font-size="22px" class="iconify iconify--bx" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 10c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2zm0 12c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2z"></path></svg>
                  {shown && <div className="smbar">
                    <div>Refresh</div>
                    <div>Share</div>
                    <div>Update</div>
                  </div>}
                </div>
              </div>
            </div>
          </div>
          <div className="s3">
            <div className="s31">
              <div className="s311">
                <p>Total Revenue</p>
                <div ref={chartRef}></div>
              </div>
              <div className="s312">
                <div className="s3121" ref={yearRef}>
                  <button onClick={() => setIsOpen(!isOpen)}>
                    {selectedYear}
                    <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#696cff"><path d="M480-333 240-573l51-51 189 189 189-189 51 51-240 240Z" /></svg>
                  </button>
                  {isOpen && (
                    <div className="year">
                      {years.map((year, index) => (
                        <div key={year} onClick={() => handleSelectYear(year)}>
                          {year}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                <div className="s3122" ref={gaugeRef}></div>
                <p>62% Company Growth</p>
                <div className="s3123">
                  <div className="s31231">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" font-size="22px" class="iconify iconify--bx" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M15.999 8.5h2c0-2.837-2.755-4.131-5-4.429V2h-2v2.071c-2.245.298-5 1.592-5 4.429c0 2.706 2.666 4.113 5 4.43v4.97c-1.448-.251-3-1.024-3-2.4h-2c0 2.589 2.425 4.119 5 4.436V22h2v-2.07c2.245-.298 5-1.593 5-4.43s-2.755-4.131-5-4.429V6.1c1.33.239 3 .941 3 2.4zm-8 0c0-1.459 1.67-2.161 3-2.4v4.799c-1.371-.253-3-1.002-3-2.399zm8 7c0 1.459-1.67 2.161-3 2.4v-4.8c1.33.239 3 .941 3 2.4z"></path></svg>
                  </div>
                  <div className="s31233">
                    <p>{selectedYear}</p>
                    <span>${totals.current}K</span>
                  </div>
                  <div className="s31232">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" font-size="22px" class="iconify iconify--bx" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M16 12h2v4h-2z"></path><path fill="currentColor" d="M20 7V5c0-1.103-.897-2-2-2H5C3.346 3 2 4.346 2 6v12c0 2.201 1.794 3 3 3h15c1.103 0 2-.897 2-2V9c0-1.103-.897-2-2-2zM5 5h13v2H5a1.001 1.001 0 0 1 0-2zm15 14H5.012C4.55 18.988 4 18.805 4 18V8.815c.314.113.647.185 1 .185h15v10z"></path></svg>
                  </div>
                  <div className="s31233">
                    <p>{selectedYear - 1}</p>
                    <span>${totals.previous}K</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="s32">
              <div className="s321">
                <div className="s3211">
                  <div>
                    <img src={img03} alt="" />
                    Payments
                    <span>$2,468</span>
                    <span><svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" font-size="16" class="iconify iconify--bx" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="m18.707 12.707l-1.414-1.414L13 15.586V6h-2v9.586l-4.293-4.293l-1.414 1.414L12 19.414z"></path></svg> 14.82%</span>
                  </div>
                  <div className="s32111" ref={payRef} onClick={handleClick1}>
                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" font-size="22px" class="iconify iconify--bx" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 10c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2zm0 12c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2z"></path></svg>
                    {shown1 && <div className="smbar">
                      <div>Refresh</div>
                      <div>Share</div>
                      <div>Update</div>
                    </div>}
                  </div>
                </div>
                <div className="s3212">
                  <div>Revenue
                    <span>${totals.current}K</span>
                  </div>
                  <div ref={weekRef}></div>
                </div>
              </div>
              <div className="s322">
                <div className="left">
                  <p>Profit Report</p>
                  <span className="sp1">Year {selectedYear}</span>
                  <span><svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" font-size="16" class="iconify iconify--bx" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M11 8.414V18h2V8.414l4.293 4.293l1.414-1.414L12 4.586l-6.707 6.707l1.414 1.414z"></path></svg> {displayRate.profitRate}%</span>
                  <p>${totals.currentprofit}K</p>
                </div>
                <div className="right" ref={chart1Ref}>
                </div>
              </div>
            </div>
          </div>
          <div className="s4">
            <div className="s41">
              <div className="s411">
                <p style={{ fontSize: 20, color: '#32475cde', fontWeight: 500, lineHeight: 1.5 }}>Order Statistics <br /><span style={{ fontSize: 14, color: '#32475c99' }}>42.82k Total Sales</span></p>
                <div className="s4111" ref={orderRef} onClick={handleClick2}>
                  <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" font-size="22px" class="iconify iconify--bx" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 10c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2zm0 12c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2z"></path></svg>
                  {shown2 && <div className="smbar">
                    <div>Refresh</div>
                    <div>Share</div>
                    <div>Update</div>
                  </div>}
                </div>
              </div>
              <div className="s412">
                <div className="s4121">
                  <p style={{ fontSize: 32, color: '#32475cde', fontWeight: 500, lineHeight: 1.5 }}>8,258</p>
                  <p style={{ fontSize: 16, color: '#32475c99', lineHeight: 1.5 }}>Total Orders</p>
                </div>
                <div className="s4122">
                  <canvas ref={chart2Ref} style={{ width: '100%', height: '100%' }}></canvas>
                </div>
              </div>
              <div className="s413">
                <div className="s4131">
                  <div className="s4132">
                    <div>
                      <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" font-size="22px" class="iconify iconify--bx" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M16.75 2h-10c-1.103 0-2 .897-2 2v16c0 1.103.897 2 2 2h10c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zm-10 18V4h10l.002 16H6.75z"></path><circle cx="11.75" cy="18" r="1" fill="currentColor"></circle></svg>
                    </div>
                    <div>
                      <p style={{ color: 'rgba(50, 71, 92, 0.87)', fontWeight: 500, lineHeight: 1.5, fontSize: 16 }}>Electronic</p>
                      <p style={{ color: 'rgba(50, 71, 92, 0.38)', fontSize: 14, lineHeight: 1.2 }}>Mobile, Earbuds, TV</p>
                    </div>
                  </div>
                  <p>82.5k</p>
                </div>
                <div className="s4131">
                  <div className="s4132">
                    <div style={{ color: '#71dd37', backgroundColor: '#e8fadf' }}>
                      <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" font-size="22px" class="iconify iconify--bx" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M13 10.551v-.678A4.005 4.005 0 0 0 16 6c0-2.206-1.794-4-4-4S8 3.794 8 6h2c0-1.103.897-2 2-2s2 .897 2 2s-.897 2-2 2a1 1 0 0 0-1 1v1.551l-8.665 7.702A1.001 1.001 0 0 0 3 20h18a1.001 1.001 0 0 0 .664-1.748L13 10.551zM5.63 18L12 12.338L18.37 18H5.63z"></path></svg>
                    </div>
                    <div>
                      <p style={{ color: 'rgba(50, 71, 92, 0.87)', fontWeight: 500, lineHeight: 1.5, fontSize: 16 }}>Fashion</p>
                      <p style={{ color: 'rgba(50, 71, 92, 0.38)', fontSize: 14, lineHeight: 1.2 }}>Tshirt, Jeans, Shoes</p>
                    </div>
                  </div>
                  <p>23.8k</p>
                </div>
                <div className="s4131">
                  <div className="s4132">
                    <div style={{ color: '#03c3ec', backgroundColor: '#d6f5fc' }}>
                      <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" font-size="22px" class="iconify iconify--bx" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M3 13h1v7c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-7h1a1 1 0 0 0 .707-1.707l-9-9a.999.999 0 0 0-1.414 0l-9 9A1 1 0 0 0 3 13zm7 7v-5h4v5h-4zm2-15.586l6 6V15l.001 5H16v-5c0-1.103-.897-2-2-2h-4c-1.103 0-2 .897-2 2v5H6v-9.586l6-6z"></path></svg>
                    </div>
                    <div>
                      <p style={{ color: 'rgba(50, 71, 92, 0.87)', fontWeight: 500, lineHeight: 1.5, fontSize: 16 }}>Decor</p>
                      <p style={{ color: 'rgba(50, 71, 92, 0.38)', fontSize: 14, lineHeight: 1.2 }}>Fine Art, Dining</p>
                    </div>
                  </div>
                  <p>849</p>
                </div>
                <div className="s4131">
                  <div className="s4132">
                    <div style={{ color: '#8592a3', backgroundColor: '#ebedf0' }}>
                      <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" font-size="22px" class="iconify iconify--bx" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M19.071 4.929a9.936 9.936 0 0 0-7.07-2.938a9.943 9.943 0 0 0-7.072 2.938c-3.899 3.898-3.899 10.243 0 14.142a9.94 9.94 0 0 0 7.073 2.938a9.936 9.936 0 0 0 7.07-2.937c3.899-3.898 3.899-10.243-.001-14.143zM12.181 4h-.359c.061-.001.119-.009.18-.009s.118.008.179.009zm6.062 13H16l-1.258 2.516a7.956 7.956 0 0 1-2.741.493a7.96 7.96 0 0 1-2.746-.494L8 17.01H5.765a7.96 7.96 0 0 1-1.623-3.532L6 11L4.784 8.567a7.936 7.936 0 0 1 1.559-2.224a7.994 7.994 0 0 1 3.22-1.969L12 6l2.438-1.625a8.01 8.01 0 0 1 3.22 1.968a7.94 7.94 0 0 1 1.558 2.221L18 11l1.858 2.478A7.952 7.952 0 0 1 18.243 17z"></path><path fill="currentColor" d="m8.5 11l1.5 4h4l1.5-4L12 8.5z"></path></svg>
                    </div>
                    <div>
                      <p style={{ color: 'rgba(50, 71, 92, 0.87)', fontWeight: 500, lineHeight: 1.5, fontSize: 16 }}>Sports</p>
                      <p style={{ color: 'rgba(50, 71, 92, 0.38)', fontSize: 14, lineHeight: 1.2 }}>Football, Cricket Kit</p>
                    </div>
                  </div>
                  <p>99</p>
                </div>
              </div>
            </div>
            <div className="s42">
              <div className="s421">
                {categories.map((category) => (
                  <div className={`s4211 ${selectedCategory === category ? 'selected' : ''}`}
                    onClick={() => Click(category)}>{category}</div>
                ))}
              </div>
              {selectedCategory === "INCOME" && (
                <div className="s422">
                  <div className="s4221">
                    <img src={img04} alt="" />
                    <div className="s42211">
                      <p>Total Income</p>
                      <div className="s42212">${totals.currentincome}K <span><svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" font-size="16" class="iconify iconify--bx" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M11 8.414V18h2V8.414l4.293 4.293l1.414-1.414L12 4.586l-6.707 6.707l1.414 1.414z"></path></svg> {displayRate.incomeRate}%</span></div>
                    </div>
                  </div>
                  <div className="s4222" ref={incomeRef}></div>
                  <div className="s4223">
                    <svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                      <circle
                        cx="100"
                        cy="100"
                        r="80"
                        stroke="#ebeef0"
                        stroke-width="15"
                        fill="none"
                      />
                      <circle
                        cx="100"
                        cy="100"
                        r="80"
                        stroke="#696cff"
                        stroke-width="20"
                        fill="none"
                        stroke-linecap="round"
                        stroke-dasharray="502.65"
                        stroke-dashoffset="175.93"
                        transform="rotate(-90 100 100)"
                      />
                      <text
                        x="100"
                        y="100"
                        text-anchor="middle"
                        dominant-baseline="middle"
                        font-size="40"
                        fill="#32475c"
                      >
                        6.5K
                      </text>
                    </svg>
                    <div>
                      <p style={{ color: '#32475c99', lineHeight: 1.5 }}>Profit this week</p>
                      <p style={{ color: '#32475c61', fontSize: 14, lineHeight: 1.5 }}>$28k less than last week</p>
                    </div>
                  </div>
                </div>
              )}
              {selectedCategory === "EXPENSES" && (
                <div className="s422">
                  <div className="s4221">
                    <img src={img03} alt="" />
                    <div className="s42211">
                      <p>Total Expenses</p>
                      <div className="s42212">${totals.currentexpense}K <span style={{ color: displayRate.expenseRate >= 0 ? '#71dd37' : '#ff4d4f' }}><svg style={{
                        transform: displayRate.expenseRate >= 0 ? 'rotate(0deg)' : 'rotate(180deg)'
                      }} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" font-size="16" class="iconify iconify--bx" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M11 8.414V18h2V8.414l4.293 4.293l1.414-1.414L12 4.586l-6.707 6.707l1.414 1.414z"></path></svg> {displayRate.expenseRate}%</span></div>
                    </div>
                  </div>
                  <div className="s4222" ref={expenseRef}></div>
                  <div className="s4223">
                    <svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                      <circle
                        cx="100"
                        cy="100"
                        r="80"
                        stroke="#ebeef0"
                        stroke-width="15"
                        fill="none"
                      />
                      <circle
                        cx="100"
                        cy="100"
                        r="80"
                        stroke="#696cff"
                        stroke-width="20"
                        fill="none"
                        stroke-linecap="round"
                        stroke-dasharray="502.65"
                        stroke-dashoffset="140.74"
                        transform="rotate(-90 100 100)"
                      />
                      <text
                        x="100"
                        y="100"
                        text-anchor="middle"
                        dominant-baseline="middle"
                        font-size="40"
                        fill="#32475c"
                      >
                        7.2K
                      </text>
                    </svg>
                    <div>
                      <p style={{ color: '#32475c99', lineHeight: 1.5 }}>Expenses this week</p>
                      <p style={{ color: '#32475c61', fontSize: 14, lineHeight: 1.5 }}>$16k less than last week</p>
                    </div>
                  </div>
                </div>
              )}
              {selectedCategory === "PROFIT" && (
                <div className="s422">
                  <div className="s4221">
                    <img src={img05} alt="" />
                    <div className="s42211">
                      <p>Total Profit</p>
                      <div className="s42212">${totals.currentprofit}K <span style={{ color: displayRate.profitRate >= 0 ? '#71dd37' : '#ff4d4f' }}><svg style={{
                        transform: displayRate.profitRate >= 0 ? 'rotate(0deg)' : 'rotate(180deg)'
                      }} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" font-size="16" class="iconify iconify--bx" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M11 8.414V18h2V8.414l4.293 4.293l1.414-1.414L12 4.586l-6.707 6.707l1.414 1.414z"></path></svg> {displayRate.profitRate}%</span></div>
                    </div>
                  </div>
                  <div className="s4222" ref={profitRef}></div>
                  <div className="s4223">
                    <svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="100" cy="100" r="80" stroke="#ebeef0" stroke-width="15" fill="none" />
                      <path d="M 100 20 A 80 80 0 0 1 138.54 170.1" stroke="#696cff" stroke-width="20" fill="none" stroke-linecap="round" />
                      <text x="100" y="100" text-anchor="middle" dominant-baseline="middle" font-size="40" font-weight="normal" fill="#32475c">4.2K</text>
                    </svg>
                    <div>
                      <p style={{ color: '#32475c99', lineHeight: 1.5 }}>Profit this week</p>
                      <p style={{ color: '#32475c61', fontSize: 14, lineHeight: 1.5 }}>$28k less than last week</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="s43"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
