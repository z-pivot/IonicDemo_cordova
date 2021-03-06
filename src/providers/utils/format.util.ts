/*
 * *********************************************************
 *   author   colin
 *   company  telchina
 *   email    wanglin2046@126.com
 *   date     18-7-31 下午1:01
 * ********************************************************
 */

/**
 * 格式化相关工具类
 */
export class FormatUtil {

    /**
     * 格式“是”or“否”
     * @param value
     * @returns {string|string}
     */
    static formatYesOrNo(value: number | string): string {
        return value == 1 ? '是' : (value == '0' ? '否' : null);
    }
}
