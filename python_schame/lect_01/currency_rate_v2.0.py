"""
author:qixiu
date:2018/08/22
汇率兑换 v2.0 ：判断输入的是人民币还是美元，给定汇率，输出转换后的美元或人民币
"""
#汇率判断与计算
def transfer(_money_input_,_money_currency_rate_):
    _money_input_val_ = float(_money_input_[:-3])
    _money_input_label_ = _money_input_[-3:]
    if (_money_input_label_ == 'USD'):
        _money_transform_rmb_ = _money_input_val_ * _money_currency_rate_
        print('{}美元兑换后的人民币金额为：{}元'.format(_money_input_val_, _money_transform_rmb_))
    elif (_money_input_label_ == 'RMB'):
        _money_transform_usd_ = _money_input_val_ / _money_currency_rate_
        print('{}元兑换后的美元金额为：{}美元'.format(_money_input_val_, _money_transform_usd_))
    else:
        print('暂时不支持当前货币类型')
#函数定义
def main():
    _money_input_ = input('请输入带单位的金额（人民币：RMB，美元：USD）:')
    _money_currency_rate_ = 6.67
    transfer(_money_input_,_money_currency_rate_)

#函数调用
if __name__ == '__main__':
    main()