import { Backdrop } from "../../component/UI/backdrop/Backdrop";
import { Spinner } from "../../component/UI/spinner/Spinner";

export const Wrap = (props: { loading: boolean, children: any }) => {

    return props.loading ? (
        <Backdrop>
            <Spinner />
        </Backdrop>
    ) : (
        props.children
    );
};