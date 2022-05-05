import React from 'react';
import styles from '../tableIssueAVC.module.scss';
// import {FetchResult} from "@apollo/client";
import {
    EventLogEntry, GetEventLogEntriesQuery
} from '../../../generated/graphql';
import {Body5} from '../../../utils/typography';
import {startAndEnd} from '../../../utils/misc';
import Link from 'next/link';
//

const didSliceCenter = 10;
const dataSliceBack = -5;

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
//GetEventLogEntriesQueryHookResult
export function EventsLogTable({data}: { data: GetEventLogEntriesQuery }) {
    // const [sortKey, setSortKey] = useState<SortKeys>('id');
    // const [sortOrder, setSortOrder] = useState<SortOrder>('ascn');


    const headers: { key: keyof EventLogEntry; label: string }[] = [
        {key: 'id', label: 'Event ID'},
        {key: 'eventDate', label: 'Event date'},
        {key: 'eventType', label: 'Event type'},
        {key: 'ownerDid', label: 'Did owner'},
        {key: 'message', label: 'Event message'},
        {key: 'vcDid', label: 'VCDid'},
        {key: '__typename', label: ' '}
        // {key: 'event_date', label: 'Event date'},
        // {key: 'credential', label: 'Credential(s)'},
        // {key: 'event_type', label: 'Event type'},
        // {key: 'src_did', label: 'Rst DID'},
        // {key: 'dst_did', label: 'Dst DID'},
        // {key: 'status', label: 'Status'},
        // {key: 'status_updated', label: 'Status updated'}
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
            {data?.getEventLogEntries.length !== 0
                ? <div className={styles.border_wrap}>
                    <table className={styles.table_wide}>
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
                            </tr>
                        </thead>

                        <tbody>
                            {data && data?.getEventLogEntries.map((log: EventLogEntry) => {
                                return (
                                    <tr key={log.id} className={styles.body_row}>
                                        <td className={styles.body_td}>#{log.id}</td>
                                        <td className={styles.body_td}>{log.eventDate.replace('T', ' ').slice(0, dataSliceBack)}</td>
                                        <td className={styles.body_td}>{log.eventType && log.eventType === 'ISSUER_VC' ? 'Issue credential' : log.eventType === 'REQUEST_VC_VERIFICATION' ? 'Incoming issue request' : log.eventType === 'VERIFICATED' ? 'Verify credentials' : ' '}</td>
                                        <td className={styles.body_td}>{startAndEnd(log.ownerDid, didSliceCenter)}</td>
                                        <td className={styles.body_td}>{log.message.split('.')[0]}</td>
                                        <td className={styles.body_td}>{startAndEnd(log.vcDid, didSliceCenter)}</td>
                                        <td className={styles.body_td}>
                                            <Link href={'/event-logs/[id]'} as={`/event-logs/${log.vcDid}`} passHref>
                                                <a>
                                                    Details
                                                </a>
                                            </Link>
                                        </td>
                                        {/*<td className={styles.body_td}>{person.event_date}</td>*/}
                                        {/*<td className={styles.body_td}>{person.credential}</td>*/}
                                        {/*<td className={styles.body_td}>{person.event_type}</td>*/}
                                        {/*<td className={styles.body_td}>{person.src_did}</td>*/}
                                        {/*<td className={styles.body_td}>{person.dst_did}</td>*/}
                                        {/*<td className={`${styles.body_td} ${styles.green}`}>{person.status}</td>*/}
                                        {/*<td className={styles.body_td}>{person.status_updated}</td>*/}
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
