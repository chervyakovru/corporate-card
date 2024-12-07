import React from 'react';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

interface UserRequest {
  id: string;
  name: string;
  phoneNumber: string;
}

interface UserRequestListProps {
  requests: UserRequest[];
  onApprove: (id: string) => void;
}

const UserRequestList: React.FC<UserRequestListProps> = ({ requests, onApprove }) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Phone Number</TableHead>
          <TableHead>Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {requests.map((request) => (
          <TableRow key={request.id}>
            <TableCell>{request.name}</TableCell>
            <TableCell>{request.phoneNumber}</TableCell>
            <TableCell>
              <Button onClick={() => onApprove(request.id)}>Approve</Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default UserRequestList;

