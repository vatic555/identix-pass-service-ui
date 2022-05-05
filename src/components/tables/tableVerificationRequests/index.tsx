import React from 'react';
import styles from '../tableIssueAVC.module.scss';
import {GetUserVCsVerifierQuery, Vc} from '../../../generated/graphql';
import {formatDate, startAndEnd} from '../../../utils/misc';
import Link from 'next/link';
import {Body5, Label1} from '../../../utils/typography';

// type verificationCasesType = {
//     verifierDid: VerificationCase;
//     status: string;
// }

// type SortKeys = keyof Data[0];
//
// type SortOrder = 'ascn' | 'desc';
//
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

export function VerificationRequestsTable({data}: { data: GetUserVCsVerifierQuery }) {
    // const [sortKey, setSortKey] = useState<SortKeys>('vc_did');
    // const [sortOrder, setSortOrder] = useState<SortOrder>('ascn');
    // const router = useRouter();
    // const handleRowClick = () => {
    //     router.push('/verifier/[id]');
    // };

    const headers: { key: keyof Vc; label: string }[] = [
        {key: 'vcDid', label: 'VC DID'},
        {key: 'issuerDid', label: 'Issuer'},
        {key: 'holderDid', label: 'Holder'},
        {key: 'createdAt', label: 'Request date'},
        {key: 'verificationCases', label: 'Status'}
    ];

    // const sortedData = useCallback(
    //     () => sortData({tableData: data, sortKey, reverse: sortOrder === 'desc'}),
    //     [data, sortKey, sortOrder]
    // );
    //
    // function changeSort(key: SortKeys) {
    //     setSortOrder(sortOrder === 'ascn' ? 'desc' : 'ascn');
    //
    //     setSortKey(key);
    // }

    return (
        <>
            {data && data.getUserVCs.length !== 0
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
                            {data && data?.getUserVCs.map((vc) => {
                                return (
                                    <tr key={vc.vcDid} className={styles.body_row}>
                                        <td className={styles.body_td}>{startAndEnd(vc.vcDid, 10)}</td>
                                        <td className={styles.body_td}>{startAndEnd(vc.vcTypeDid, 10)}</td>
                                        <td className={styles.body_td}>{startAndEnd(vc.holderDid, 10)}</td>
                                        <td className={styles.body_td} style={{width: '15%'}}>{formatDate(vc.createdAt)}</td>
                                        <td className={styles.body_td} style={{width: '12%'}}><Label1 fontWeight="600" color={vc.verificationCases[0].verificationStatus === 'ACCEPTED' ? '#7EF606' : vc.verificationCases[0].verificationStatus === 'REJECTED' ? '#FF0000' : '#999999'}>{vc.verificationCases[0].verificationStatus && vc.verificationCases[0].verificationStatus === 'PENDING_VERIFY' ? 'Pending' : vc.verificationCases[0].verificationStatus === 'ACCEPTED' ? 'Verified' : vc.verificationCases[0].verificationStatus === 'REJECTED' ? 'Rejected' : ' '}</Label1></td>
                                        <td className={styles.body_td}>
                                            <Link href={'/verifier/[id]'} as={`/verifier/${vc.vcDid}`} passHref>
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
