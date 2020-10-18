import React, { PropsWithChildren } from 'react';
import styles from './LessonTable.module.scss';

export interface LessonTableProps {
  head: string[];
  side: string[];
  rows: string[][];
  className?: string;
}
export default function LessonTable({
  head, side, rows, className,
}: LessonTableProps) {
  const hasSide = !!side.length;
  const width = `${100 / (head.length + (hasSide ? 1 : 0))}%`;
  return (
    <table className={`${styles['lesson-table']} ${className} w-100 text-center`}>
      <thead>
        <tr>
          {hasSide && <th className="is--side" style={{ width }}>{' '}</th>}
          {head.map((text) => (<th key={text} style={{ width }}>{text}</th>))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, index) => (
          <tr key={row[0]}>
            {hasSide && <td className="is--side text-bold" style={{ width }}>{side[index]}</td>}
            {row.map((text) => (<td style={{ width }} key={text}>{text}</td>))}
          </tr>
        ))}
      </tbody>
      <tbody />
    </table>
  );
}
