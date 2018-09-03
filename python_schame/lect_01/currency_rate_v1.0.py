"""
author:qixiu
date:2018/08/22
汇率兑换 v1.0 ：输入人民币/美元，给定汇率，通过占位符方式输出转换后的美元/人民币
"""
#函数定义
def main():
    rmb_currency = eval(input('请输入人民币金额：'))
    currency_rate = 6.67
    us_dollar = rmb_currency / currency_rate
    # 占位符输出 - format
    print('兑换后的美元金额为: {} 美元'.format(us_dollar))

    us_currency = float(input('请输入美元金额：'))
    rmb_num = us_currency * currency_rate
    #占位符输出 - format
    print('兑换后的人民币金额为: {} 元'.format(rmb_num))
#函数调用
if __name__ == '__main__':
    main()