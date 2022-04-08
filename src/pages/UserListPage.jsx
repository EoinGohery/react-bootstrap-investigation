import { Alert, Container, Table } from "react-bootstrap"
import { useQuery } from "react-query"
import { getAllUsers } from "../api/UserAPI"
import { ThreeDots as Loader } from "react-loader-spinner"
import { Link } from "react-router-dom"

export const UserListPage = () => {

    const { users, error, isLoading, isError } = useQuery("users", getAllUsers);

    if (isLoading) {
        return (
            <Container>
                <Loader />
            </Container>
        )
    }

    if (isError) {
        return (
            <Container>
                <Alert variant="danger">
                    {JSON.stringify(error)}
                </Alert>
            </Container>
        )
    }

    return (
        <Container>
            <h2>User List</h2>
            <Table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Active</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map(user => {
                            return (
                                <tr key={user.id}>
                                    <td><Link to={`/users/${user.id}`}>{user.id}</Link></td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.active ? "Active" : "Inactive"}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
        </Container>
    )
}