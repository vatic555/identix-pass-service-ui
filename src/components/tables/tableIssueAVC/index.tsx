import Link from 'next/link';
import React from 'react';
import {formatDate, startAndEnd} from '../../../utils/misc';
import styles from '../tableIssueAVC.module.scss';
import {Vc, GetUserVCsIssuerQuery} from '../../../generated/graphql';
import {Body5} from '../../../utils/typography';

// type Data = {
//     vcDid: string;
//     vcTypeDid: string;
//     vcParams: string;
//     issuerDid: string;
//     holderDid: string;
//     createdAt: string;
// };
//
// type SortKeys = keyof Data;

// type SortOrder = 'ascn' | 'desc';

// function sortData({
//     tableData,
//     sortKey,
//     reverse
// }: {
//     tableData: Data;
//     sortKey: SortKeys;
//     reverse: boolean;
// }) {
//     if (!sortKey) {
//         return tableData;
//     }
//
//     const sortedData = data.sort((a, b) => {
//         return a[sortKey] > b[sortKey] ? 1 : -1;
//     });
//
//     if (reverse) {
//         return sortedData.reverse();
//     }
//
//     return sortedData;
// }
//
// function SortButton({
//     sortOrder,
//     columnKey,
//     sortKey,
//     onClick
// }: {
//     sortOrder: SortOrder;
//     columnKey: SortKeys;
//     sortKey: SortKeys;
//     onClick: MouseEventHandler<HTMLButtonElement>;
// }) {
//     return (
//         <button
//             onClick={onClick}
//             className={`${
//                 sortKey === columnKey && sortOrder === 'desc'
//                     ? `${styles.sort_button} ${styles.sort_reverse}`
//                     : `${styles.sort_button}`
//             }`}
//         />
//     );
// }

export function IssueAVCTable({data}: { data: GetUserVCsIssuerQuery }) {
    // const [sortKey, setSortKey] = useState<SortKeys>('id');
    // const [sortOrder, setSortOrder] = useState<SortOrder>('ascn');

    const headers: { key: keyof Vc; label: string }[] = [
        {key: 'vcDid', label: 'VC DID'},
        {key: 'vcTypeDid', label: 'VC type'},
        {key: 'holderDid', label: 'Holder'},
        {key: 'createdAt', label: 'Issuance date'}
    ];

    // const sortedData = useCallback(
    //     () => sortData({tableData: data, sortKey, reverse: sortOrder === 'desc'}),
    //     [data, sortKey, sortOrder]
    // );

    // function changeSort(key: SortKeys) {
    //     setSortOrder(sortOrder === 'ascn' ? 'desc' : 'ascn');
    //
    //     setSortKey(key);
    // }

    return (
        <>
            {data && data?.getUserVCs.length !== 0
                ? <div className={styles.border_wrap}>
                    <table className={styles.table}>
                        <thead className={styles.thead}>
                            <tr>
                                {headers.map((row) => {
                                    return (
                                        <td key={row.key} className={styles.head_td}>
                                            {row.label}{' '}
                                            {/*<SortButton*/}
                                            {/*    columnKey={row.key}*/}
                                            {/*    onClick={() => changeSort(row.key)}*/}
                                            {/*    {...{*/}
                                            {/*        sortOrder,*/}
                                            {/*        sortKey*/}
                                            {/*    }}*/}
                                            {/*/>*/}
                                        </td>
                                    );
                                })}
                                <td/>
                            </tr>
                        </thead>

                        <tbody>
                            {data && data?.getUserVCs.map((vc, key: number) => {
                                return (
                                    <tr key={key} className={styles.body_row}>
                                        <td className={styles.body_td}>{startAndEnd(vc.vcDid, 10)}</td>
                                        <td className={styles.body_td}>{startAndEnd(vc.vcTypeDid, 10)}</td>
                                        <td className={styles.body_td}>{startAndEnd(vc.holderDid, 10)}</td>
                                        <td className={styles.body_td}>{formatDate(vc.createdAt)}</td>
                                        <td className={styles.body_td}>
                                            <Link href={'/issue-a-vc/[id]'} as={`/issue-a-vc/${vc.vcDid}`} passHref>
                                                <a>
                                        Details
                                                </a>
                                            </Link>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
                : <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                    <Body5 margin="100px 0 80px">Nothing here yet.</Body5>
                </div>
            }
        </>
    );
}
